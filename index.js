import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js";
import  foodRouter  from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";


const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
//const cors = require('cors');

//const app = express();

// Use CORS middleware
app.use(cors())
app.use(cors({
    origin: '*', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If you need to send cookies or other credentials
}));
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)

app.options('*', cors());
connectDB()

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log("Server is Running")
})

app.use("/api/food",foodRouter)

//mongodb+srv://Sidhu2520:Sidhu123@cluster0.jeh94.mongodb.net/?