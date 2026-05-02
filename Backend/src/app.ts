import express from "express";
import cors from "cors";
import {connectDB} from './db/connect'

import inventoryRouter from "./routes/inventory";


const app = express();

app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json());


connectDB();

app.use("/inventory",inventoryRouter)

app.listen(3000,()=>{
    console.log("server runiiinn")
})

