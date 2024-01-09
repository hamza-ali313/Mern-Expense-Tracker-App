import express from "express";
const app = express()
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config()


app.use(express.json());
app.use(cors());
app.use(cookieParser());


const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO).then(() => {
    console.log(`starting on port ${port}`);
    app.listen(port);
  })
  
  app.get('/',(req,res)=>{
    res.send("server is up and running successfully")
  })
 

export default app