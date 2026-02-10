const express=require('express');
const app=express();
require('dotenv').config()
const port=3000;

app.get('/',(req,res)=>{
    res.send('hello shavan ')
});

const data={
    "name":"shavan singh",
    "hobbies":["coding","gaming","travelling"],
    "age":25,
    "email":"shavansingh@gmail.com"
    
}

app.get('/login',(req,res)=>{
    res.send("<h1>this is progile page </h1>")

});

app.get('/myData',(req,res)=>{
    res.json(data);//.json method is used to send json data as a response to the client. it converts the data into json format and sends it to the client. it also sets the content-type header to application/json
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`);
    
})