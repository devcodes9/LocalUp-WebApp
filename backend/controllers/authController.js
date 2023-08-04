const User = require("../models/User");
const OTP = require("../models/OTP");
const Store = require("../models/Store");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// sendOTP
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // check if user already exists
    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
      return res.status(403).json({
        success: false,
        message: "User already registered",
      });
    }

    //generate OTP
    let otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    // check unique OTP
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    // otpDoc = new OTP({
    //     otp: otp,
    //     email: email
    // })

    // await otpDoc.save();
    // .create() does the whole thing in single step

    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (err) {
    console.error("Error while generating OTP: ", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// signup
const signup = async (req, res) => {
  try {
    // data fetch from request's body
    const { name, email, contactNumber, password, role, otp } = req.body;
    
    // validate data
    if (!name || !email || !password || !otp) {
      return res.status(403).json({
        success: false,
        message: "Please fill the mandatory fields",
      });
    }
    //check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }

    //find most recent OTP stored for user
    const recentOTP = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!recentOTP) {
      return res.status(403).json({
        success: false,
        message: "OTP not found",
      });
    }

    if (recentOTP[0].otp != otp) {
      return res.status(403).json({
        success: false,
        message: "Please input correct OTP",
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create entry in database
    const user = await User.create({
      name,
      email,
      contactNumber,
      password: hashedPassword,
      role
    });

    if(user.role === "store-owner"){
      const store = await Store.create({
        name,
        user: user._id
      })
      console.log("Store created: ", store);
    }

    //return res
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Please fill the mandatory fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(403).json({
        success: false,
        message: "User doesn't exist, Please sign up",
      });
    }

    const passCheck = await bcrypt.compare(password, existingUser.password);

    if (!passCheck) {
      return res.status(403).json({
        success: false,
        message: "Please enter correct password",
      });
    }

    //generate jwt token
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_SECRET
    );

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    
    existingUser.token = token;
    existingUser.password = undefined;

    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      existingUser,
      message: "User Logged in successfully",
    });

    // return res.status(200).json({
    //   success: true,
    //   message: "User logged in successfully",
    //   existingUser,
    // });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//change password

module.exports = { sendOTP, signup, login };
