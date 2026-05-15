import mongoose from "mongooes";

const lecturerSchema =new mongoose.Schema({
    lecturerID:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        default:"abc@123",
    },
    jobTitle:{
        type:String,
    },
});

export default mongoose.model("Lecture",lecturerSchema);