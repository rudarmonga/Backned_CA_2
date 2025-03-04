const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message : "MY server is running here"
    })
})

app.post('/sing-up', (req,res)=>{
    const {UserName , Email , Password } = req.body;
    const user = req.body;
    if(!UserName){
        return res.status(400).json({message : "Username cannot be empty"});
    }else if(!Email){
        return res.status(400).json({message : "Email cannot be empty"});
    }else if(!(!(Password.length <= 8) || !(Password.length > 16))){
        return res.status(400).json({message : "Password length should be greater than 8 or less than and equals to 16"});
    }else{
        res.status(201).json({
            message : "user created",
            User : user
        })
    }
})

app.listen(3000,()=>{
    console.log(" Server runing on http://localhost:3000");
})
