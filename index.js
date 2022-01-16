const express = require("express");
const app = express();
let port = process.env.port || 3000;
const importData = require("./data.json");

app.get("/",(req,res) =>{
    res.send("The Postman will drop you to the destination when you find the correct endpoint");
});

app.get("/12039eirkvmacnv",(req,res)=>{
    res.send(importData);    
})

app.listen(port,()=>{
    console.log('listening on port http://localhost:${port}');
});