const {resetPassword,createUser,UserData}=require('../../model/auth/auth.model')
const {generateOTP}=require('../../modules/otp')
const {SendMail}=require('../../modules/mail')
const {StoreOtp,verifyOtp}=require('../../model/auth/otp.model')

const httpValidUser=async(req,res)=>{
     const {email,password}=req.body;
    // console.log(email,password);
     const isUser=await UserData(email);
   //  console.log(isUser);
     let result={response:1};
     if(isUser==null) result={response:0,error:"user is not registered"} 
     if(isUser && isUser.password!=password) result={response:0,error:"wrong password!!"}
    res.status(200).json({response:1,name:isUser.name});
} 


const httpCreateUser=async(req,res)=>{ 
     const data=req.body;
     const {email}=data;
     const isUser=await UserData(email);
     if(isUser){  res.status(200).json({response:0,error:"user is already registered"}); return;}

     const result= await createUser(data);
     const response={response:result.acknowledged}
     res.status(200).json(response);
}

const httpSendOtp=async(req,res)=>{
     const {email}=req.body;
     const isUser=await UserData(email);
    // console.log(isUser);
     if(isUser==null){ res.status(200).json({response:0,error:"user is not registered"}); return; } 

     const otp=generateOTP();
     const storeotp=await StoreOtp(email,otp);
  //   console.log("storeotp",storeotp);
     if(!storeotp.acknowledged){ res.status(200).json({response:0,error:"unexpected ocurred"}); return;}
     const sendmail=await SendMail(email,otp);
    // console.log("sendmail",sendmail);
     const response={response:true};
     res.status(200).json(response);
}

const httpResetPassword=async(req,res)=>{ 
     const {password,email,otp}=req.body
     const verify =await verifyOtp(email);
    // console.log("verify",verify);
     let result={response:1};
     if(verify==null) result={response:0,error:"user is not registered"}; 
     else if(verify && verify.otp!=otp) result={response:0,error:"incorrect otp!!"}
     else{
          const reset= await resetPassword(email,password);
           result={response:reset.acknowledged}
     }
     res.status(200).json(result);
}


module.exports ={
    httpValidUser,
    httpCreateUser,httpResetPassword,httpSendOtp
}