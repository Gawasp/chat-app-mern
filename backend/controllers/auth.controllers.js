import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password didn't match"})
        }

        const user = await User.findOne({userName});

        if (user) {
            return res.status(400).json({error:"Username already exist"});
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        //https://avatar-placeholder.iran.liara.run/

        const boyPrfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlPrfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = newUser({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePic: gender === "male" ? boyPrfilePic : girlPrfilePic
        })

        if(newUser){
            //generate jwt tocken here
            await newUser.save();

        res.status(201),json({
            _id : newUser._id,
            fullName : newUser.fullName,
            userName : newUser.userName,
            profilePic : newUser.profilePic
        });
        }
        else{
            res.status(400).json({error: "Invalid user"});
        }
    } catch (error) {
        console.log("error",error);
        res.status(500).json({error:"Internal server error"});
    }
}

export const login = async (req, res) => {
    try {
        console.log("signup");
    } catch (error) {
        
    }
}

export const logout = async (req, res) => {
    try {
        console.log("signup");
    } catch (error) {
        
    }
}