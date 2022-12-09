const {validUser}=require('../../model/user/user.model')

const httpValidUser=(req,res)=>{
     const {email,password}=req.body
     const result= validUser(email,password);
     res.status(200).json(result);
}

module.exports ={
    httpValidUser
}