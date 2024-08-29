import cloudinary from "../utills/cloudinary.js";
import getDataUri from "../utills/dataUri.js";
import User from "./../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const signup = async (req, res) => {
  try {
    const { fullName, email, password, phoneNumber, role } = req.body;
    // console.log("Received data:", req.body);
    // console.log("Received file:", req.file);
  
    if (!fullName) {
     return res.status(400).json({
        message: "Please Enter Your Full Name",
        success: false,
      });
    }
    if (!email) {
     return res.status(400).json({
        message: "Please Enter Your Email",
        success: false,
      });
    }
    if (!password) {
     return res.status(400).json({
        message: "Please Enter Password",
        success: false,
      });
    }
    if (!phoneNumber) {
      return  res.status(400).json({
        message: "Please Enter Your Contact Number",
        success: false,
      });
    }
    if (!role) {
      return   res.status(400).json({
        message: "Please Enter Role",
        success: false,
      });
    }
    let profilePhotoUrl = null;
    if (req.file) {
    const file = req.file;
      const fileUri = getDataUri(file);
      const cloudinaryResponse = await cloudinary.uploader.upload(
        fileUri.content, {
          folder: 'Hirea.io/Profile Photo'
        }
      );
      profilePhotoUrl = cloudinaryResponse.secure_url;
    }
    const user = await User.findOne({ email });
    if (user) {
      return  res.status(400).json({
        message: "User Exists With Similar Email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: profilePhotoUrl,
      },
    });
    //await newUser.save();
   res.status(201).json({
      message: "User created successfully",
      user: newUser,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error signing up user",
      success: false,
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    //console.log("Data From Client side",req.body)
    if (!email) {
     return  res.status(400).json({
        message: "Please Enter Your Email",
        success: false,
      });
    }
    if (!password) {
      return res.status(400).json({
        message: "Please Enter Password",
        success: false,
      });
    }
    if (!role) {
      return res.status(400).json({
        message: "Please Enter Role",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exist.Please SignUp",
        success: false,
      });
    }
    const passwordMatch =await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: "Please Enter Correct Password",
        success: false,
      });
    }
    if (role != existingUser.role) {
      return res.status(400).json({
        message: "User with this role does not exist",
        success: false,
      });
    }

    const user = {
      _id: existingUser._id,
      fullName: existingUser.fullName,
      email: existingUser.email,
      phoneNumber: existingUser.phoneNumber,
     
      role: existingUser.role,
      profile: existingUser.profile,
    };

    const tokenData = { userId: existingUser._id };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .cookie("token", token, { httpOnly: true, sameSite: "strict" })
      .json({
        message: `Welcome Back ${existingUser.fullName}`,
        user,
        success: true,
        
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error While trying to login", error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", " ").json({
      message: "Log Out Successfully",
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error While trying to logout", error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    //console.log(req.body);
    //console.log(req.file);

    const userId = req.id;
    const user = await User.findById(userId);
    let skillsArray;
    if (skills) {
      if (typeof skills === "string") {
        skillsArray = skills.split(",");
      } else {
        return res
          .status(400)
          .json({
            message: "Skills should be a comma-separated string",
            success: false,
          });
      }
    }
    if (!user) {
      res
        .status(400)
        .json({ message: "User Not found,Please Login", success: false });
    }
    if (fullName) {
      user.fullName = fullName;
    }
    if (email) {
      user.email = email;
    }
    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }
    if (bio) {
      user.profile.bio = bio;
    }
    if (skillsArray) {
      user.profile.skills = skillsArray;
    }
    // Handle file upload
    if (file) {
      const fileUri = getDataUri(file);
      const cloudinaryResponse = await cloudinary.uploader.upload(
        fileUri.content,{folder: 'Hirea.io/Resume'}
      );

      
      user.profile = {
        ...user.profile,
        resume: cloudinaryResponse.secure_url,
        resumeOriginalName: file.originalname,
      };
    }
    await user.save();
    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    res.status(200).json({
      message: "User Details Updated Successfully",
      userData,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while trying to update", error: error.message });
  }
};

export { signup, login, logout, updateProfile };
