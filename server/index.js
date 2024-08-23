import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import dbConnection from "./utills/db.js";
import userRoute from "./routes/user.route.js"
import companyRouter from "./routes/company.route.js"




const app=express();
dotenv.config();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));



//Api
app.use("/api/user",userRoute);
app.use("/api/company",companyRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Listening on Port:${process.env.PORT}`)
    dbConnection();
})