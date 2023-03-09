const mongoose=require("mongoose");
mongoose.set("strictQuery", false); 
const monguri="mongodb+srv://biswajitnag68:Biswajit%4012@cluster0.kmp9j6a.mongodb.net/test";
const connecttomongo=()=>{
    mongoose.connect(monguri,()=>{
        console.log("db conected");
    })
}
module.exports=connecttomongo;