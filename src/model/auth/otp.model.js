const otpDB =require('./otp.mongo');


// const resetPassword=async(email,password)=>{
//     const result=await otpDB.updateOne({email},{password},{upsert:true})
//     return result;
// }

const StoreOtp=async(email,otp)=>{
    const data={email,otp};
    const result=await otpDB.updateOne({email},data,{upsert:true});
    return result;
}
const verifyOtp=async(email)=>{
    const result=await otpDB.findOne({email:email});
    return result;
}


// const resetPasswordcntrl=async(email)=>{
//     const otp="hjkdzgfjh";
//    // const sendmail=mail(email,otp);
//     const data={email,otp}
//     const result=await otpDB.updateOne({email},data,{upsert:true});
//     console.log(result);
// }
module.exports={StoreOtp,verifyOtp}
