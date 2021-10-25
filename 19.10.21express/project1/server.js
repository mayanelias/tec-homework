
const express = require("express");
const axios=require("axios");
const app=express();
const path = require("path");
const PORT=1700;
const publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));
app.get("/city1",(req,res)=>{
const cityName=`${req.query.city1}`
const apiKey="6fa81c83394e5a164a3a430b9acbfa94"
console.log(req.query.city1);
const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
axios
.get(url)
.then(function(response){
console.log(response);
console.log("its good");
if(response.status===200){
console.log(response.data)
res.send(`name:${response.data.name},longitude:${response.data.coord.lon},latitude:${response.data.coord.lat}`)
}
})
.catch(function(error){
res.sendFile(path.join(__dirname,"public","./error.html"))
console.log("error!!!");
console.log(error);
});
});
app.listen(PORT, () => {
 console.log(`server listens on port : ${PORT}`);
});