import mongoose from "mongoose"; //mongoose help node.js communicate with mongodb

const connectDB =async () =>{ //crte a function call for database connect and this function works asynchoronous operation
    try{
        await mongoose.connect(process.env.MONGO_URL);//connect mongodb  using url from.env file

        console.log("mongodb connected");

    }catch(error){
        
        console.log(error);
    }
};

export default connectDB;