const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const {sighnupmodel}=require("./models/sighnup")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://hannasherin:Alazhar4@cluster0.agtcb.mongodb.net/blogDb?retryWrites=true&w=majority&appName=Cluster0")

const generateHashedPassword= async(password)=>{
     const salt=await bcrypt.genSalt(10)//salt is a cost factor value
     return bcrypt.hash(password,salt)
     
}

app.post("/sighnup",async(req,res)=>{ //password is a async functn so must need to convert this functn into async
    let input=req.body
    
    let hashedPassword=await generateHashedPassword(input.password)
    console.log(hashedPassword)
    res.json({"status":"success"})
    input.password=hashedPassword
    let sighnup=new sighnupmodel(input)
    sighnup.save()


})



app.listen(8080,()=>{
    console.log("server started")
})