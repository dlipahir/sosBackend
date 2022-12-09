const express= require('express');
const mongoose = require('mongoose')
const cors= require("cors")
require("dotenv").config();

const {authRouter}=require("./src/routes/auth/auth.route")
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send("hii there");
});



app.use(authRouter)
//app.use(UserInfoRouter)

const MONGO_URL = process.env.MONGODB_URI ;


mongoose.connection.once('open',()=>{
   console.log('mongoDB connection ready!')
 })
 mongoose.connection.on('error',(err)=>{
 console.error(err);
 })

async function StartServer(){
   await mongoose.connect(MONGO_URL,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
   });  

   app.listen(PORT,()=>{
      console.log(`listening ar port ${PORT}`);
     })
   
 }
 
 StartServer();



