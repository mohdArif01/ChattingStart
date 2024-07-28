import mongoose from "mongoose";

const mongoConnect = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Connect to MongoDB")
    } catch (error){
        console.log("Error Connecting to MongoDB:", error.message)
    }
}

export default mongoConnect;