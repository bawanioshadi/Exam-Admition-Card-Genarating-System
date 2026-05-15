import express from "express";//import express frame work
import cors from "cors";//allows frontend to acces backend without cors acces is blocked
import dotenv from "dotenv";//get the .env file port and mongo_url

import connectDB from "./config/db.js";
dotenv.config();

const app = express();//crate express app

connectDB();//call mongodb connection function

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT,() =>{
    console.log(`server running on port ${process.env.PORT}`);
});