import cookieParser from "cookie-parser";
import express from "express"
import path from 'path';

import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env',
})

const port = process.env.PORT || 8000;

const app = express()
app.use('/uploads', express.static('uploads'));
app.use(cookieParser())

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))



// app.get("/",(req, res) => {
//     res.send("HomePage")
// })

import userRoute from "./router/user.routes.js";
import { upload } from "./multer/multer.js";

app.use("/api/v1/users", userRoute)



connectDB().then(() => {
    app.listen(port, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
})
