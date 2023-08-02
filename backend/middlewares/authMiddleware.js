const jwt = require("jsonwebtoken");
// auth
const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token Not Found" });
    }

    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (err) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    next();
  } catch (err) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Something went wrong while validating token",
      });
  }
};

// isBuyer
const isBuyer = async (req, res, next) => {
  try {
    if (req.user.role !== "buyer") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid access to buyer's route" });
    }

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Error while verifying user's role" });
  }
};

// isAdmin
const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid access to admin's route" });
    }

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Error while verifying user's role" });
  }
};

// isStoreOwner
const isStoreOwner = async (req, res, next) => {
  try {
    if (req.user.role !== "store-owner") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid access to store's route" });
    }

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Error while verifying user's role" });
  }
};

module.exports = { auth, isAdmin, isStoreOwner, isBuyer };
