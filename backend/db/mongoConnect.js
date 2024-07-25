import mongoose from "mongoose";

const DB_URL = "mongodb+srv://mohdarif12012:lZvaDkviWC6Cp0m9@chatappcluster.pt9hbkd.mongodb.net/?retryWrites=true&w=majority&appName=chatAppCluster"

const mongoConnect = async () => {
    try{
        await mongoose.connect(DB_URL)
        console.log("Connect to MongoDB")
    } catch (error){
        console.log("Error Connecting to MongoDB:", error.message)
    }
}

export default mongoConnect;