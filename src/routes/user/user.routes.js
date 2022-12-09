const {Router}=require('express')
const {httpValidUser}=require('./user.controller')
const userRouter= Router();


userRouter.get('/login',httpValidUser);




