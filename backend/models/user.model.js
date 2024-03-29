import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        require:true
    },
    UserName:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true,
        minlength:6
    },
    Gender:{
        type:String,
        require:true,
        minlength:6
    },
    Gender:{
        type:String,
        require:true,
        enum:["male","female"]
    },
    ProfilePic:{
        type:String,
        default:"",
    },
});

const user = mongoose.model("User", userSchema);

export default user;