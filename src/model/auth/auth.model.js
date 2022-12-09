const authDB =require('./auth.mongo')


const resetPassword=async(email,password)=>{
    const result=await authDB.updateOne({email},{password},{upsert:true})
    return result;
}
const UserData=async(email)=>{
    const result=await authDB.findOne({email:email});
    return result;
}
const createUser=async(data)=>{
    const result=await authDB.updateOne({email:data.email},data,{upsert:true})
    return result;
}
module.exports={resetPassword,createUser,UserData}


// const getAllUser =async()=>{
//     const result = await userInfoDB.find({},{name:1,id:1,"_id":0});
//     return result;
// }

// const getUserDetails=async (id)=>{
//     const result = await userInfoDB.findOne({id},{"_id":0,"__v":0});
//    return result; 
// }


//  const postUserDetails=async(data)=>{
//     console.log("creating user");
//     const result = await userInfoDB.updateOne({id:data.id},data,{upsert:true});
//      return result;
// }
// const getNumberUser =async()=>{
//     const result = await userInfoDB.find({},{__v:0,_id:0}).count();
//     return result;
// }
