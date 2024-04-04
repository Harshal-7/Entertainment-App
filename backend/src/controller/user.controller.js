import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/UserModel.model.js";

export const registerController = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Provide mail id and pass",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "user already exists with your mail",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "user registration successfull" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const loginController = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Provide mail id and pass",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Please register user with this email address",
      });
    }

    const hasEqualPassword = await bcrypt.compare(password, user.password);
    if (!hasEqualPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid password or email address provided",
      });
    }

    const jwkToken = jwt.sign({ email: email }, process.env.SECRET_TOKEN);
    res.cookie("UserAuth", jwkToken).status(200).json({
      success: true,
      message: "User Login successfully",
      loginToken: jwkToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const userDetailController = async function (req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ success: true, message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const logOutController = async function (req, res) {
  try {
    res
      .clearCookie("UserAuth")
      .status(200)
      .json({ success: true, message: "User Logout Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
