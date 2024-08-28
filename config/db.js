import mongoose from 'mongoose'


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Sidhu2520:Sidhu123@cluster0.jeh94.mongodb.net/foodexp').then(()=>console.log("DB Connected"))
}

