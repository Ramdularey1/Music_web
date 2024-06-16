import User from "../model/user.model.js";
import Music from "../model/ music.model.js";
import { ApiError } from "../utils/ApiError.js";


const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");

    }
}

export const registerUser = async (req, res, next) => {
    try {
        const { username, fullname, email, password } = req.body
        // console.log(req.body);
        const existUser = await User.findOne({
            $or: [{ username }, { email }]
        })

        if (existUser) {
            throw new ApiError(409, "User with this email or username already exist")

        }

        const user = await User.create({
            fullname: fullname,
            email: email,
            username: username,
            password: password

        });

        const createdUser = await User.findById(user._id).select("-refreshToken -password")

        if (!createdUser) {
            throw new ApiError(500, "Somethimg went wrong while registering the user");

        }

    return res.status(201).json({ data: createdUser });
    } catch (error) {
        console.log(error);
        next(error)
    }

}

export const loginUser = async (req, res) => {
    console.log(req.body);
    const { email, password, username } = req.body;
    //  console.log("Email",username)
    if (!(username || email)) {
        throw new ApiError(400, "username or email is required")
    }
    
    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    // console.log("User",user)



    if (!user) {
        throw new ApiError(404, "User with this email does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalide password");
    }

    const { refreshToken, accessToken } = await generateAccessTokenAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httponly: false,
        secure: true, 
        expires : new Date(Date.now() + 24 * 60 *60 * 1000)
    }
    console.log(refreshToken);

    return res.status(200, "User loggedIn Successfully")
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json({ data: loggedInUser});
}






export const logoutUser = async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httponly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie("accesstoken", options)
        .json("user loggedout successfully")

}

export const myFavoriteMusic = async(req, res) => {
  
    try {
        const {musicId} = req.params;

        const user = req.user;
       
        if(!user){
            return res.status(404).json({message:"User does not exist"})
        }

        const music = await Music.findById(musicId);

        if(!music){
            return res.status(404).json({message:"Music not found"})
        }

        user.favoriteMusic.push(music);

        await user.save();
      
        return res.status(200).json({message:"Music added to favorites successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Music does not added to favorites music"})
    }
}

