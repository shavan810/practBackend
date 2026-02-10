const express=require('express');
const app=express();
require('dotenv').config()
const port=3000;

app.get('/',(req,res)=>{
    res.send('hello shavan ')
});

app.get('/login',(req,res)=>{
    res.send("<h1>this is progile page </h1>")

});


app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`);
    
})