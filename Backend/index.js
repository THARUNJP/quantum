import express from "express";
import cors from "cors";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config();

const port = 5000

mongoose.connect("mongodb+srv://tharunroshini71:Tharun10+@cluster0.e3eek.mongodb.net/quantum")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));


const userSchema = new mongoose.Schema({
name:String,
email:String,
dob:Date,
password:String
})

const Users = mongoose.model("users", userSchema);

const app =  express();

app.use(express.json());

app.use(cors());



app.post('/create',async(req,res)=>{
console.log(req.body);
const {name,dob,email,password} = req.body
try{
const is_saved= new Users(req.body).save()
is_saved ? res.status(200).send("successfull") : res.status(400).send("not successfull")
}
catch(err){
  console.log(err);
}
})

app.post('/login',async(req,res)=>{

  const {username,password}= req.body;
  try{

  const response =await Users.findOne({email:username});
  console.log(response);
  if( response && response.password == password) {

    const token = jwt.sign({name:response.name,dob:response.dob,email:response.email},process.env.jwt_pass,{expiresIn:"168h"})
     res.status(200).json(token)  
  }
  else{
    res.status(400).json("unsucessful")
  }
  }

  catch(err){
res.send("catch err", err)
  }

})



app.get('/users',async(req,res)=>{

  try{
    
    const data =  await Users.find({});
  data.length > 0 ? res.status(200).json(data) : res.status(200).json("no data found")

  }
  catch(err){
res.status(400).json("internal server error")
  }


})



















app.listen(port,()=>console.log(`running in port ${port}`));

