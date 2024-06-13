const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":{type:String,required:true},
    "email":{type:String,required:true},
    "password":{type:String,required:true}
})

let sighnupmodel=mongoose.model("sighnups",schema);
module.exports={sighnupmodel}