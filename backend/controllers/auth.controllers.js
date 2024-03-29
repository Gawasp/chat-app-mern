import User from "../models/user.model.js";

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
        //https://avatar-placeholder.iran.liara.run/

        const boyPrfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlPrfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = newUser({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyPrfilePic : girlPrfilePic
        })

        await newUser.save();

        res.status(201),json({
            _id : newUser._id,
            fullName : newUser.fullName,
            userName : newUser.userName,
            profilePic : newUser.profilePic
        });
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