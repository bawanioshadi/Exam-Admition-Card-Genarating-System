import mongoose from "mongooes";

const subjectSchema =new mongoose.Schema({
    subjectID:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    credit:{
        type:number,
    },
    lecturer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:true,
    },
});

export default mongoose.model("Subject",subjectSchema);