const {Router}=require('express')
const {httpValidUser,httpCreateUser,httpResetPassword,httpSendOtp}=require('./auth.controller')
const authRouter= Router();


authRouter.get('/login',httpValidUser);
authRouter.post('/create',httpCreateUser);
authRouter.post('/reset',httpResetPassword);
authRouter.post('/otp',httpSendOtp);

module.exports={authRouter}




