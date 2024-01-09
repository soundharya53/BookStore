import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express();
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Enable credentials if your requests include cookies or HTTP authentication
    // res.header('Access-Control-Allow-Credentials', 'true');
  
    next();
  });
app.use('/books',booksRoute);
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("app is connected to database")
    app.listen(PORT,()=>{
        console.log(`app is listeneing on the port:${PORT}`)
    });
   
})
.catch((error)=>{
    console.log(error);
})
