const express=require("express");
const app=express();
const request=require("request");
app.listen(process.env.PORT||3000,()=>{console.log("SERVER IS RUNNING");});
app.use(express.static("public"));


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


app.get("/",(req,res)=>{
   
res.sendFile(__dirname+"/public/index.html");

})

// request("http://api.ipstack.com/check?access_key=871ec9fc24c1a6b8185105a6fbcb9911",(e,res,body)=>{
//     console.log(body);
// })