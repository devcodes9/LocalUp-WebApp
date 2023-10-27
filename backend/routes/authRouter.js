const express = require('express');
const { login, signup, sendOTP, logout } = require('../controllers/authController');
const { auth, isBuyer, isAdmin, isStoreOwner } = require('../middlewares/authMiddleware');
const router = express.Router();


router.post('/login', login);
router.post('/signup', signup);
router.post('/sendotp', sendOTP);
router.get('/logout', logout);

//testing protected routes for single middleware
router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

//Protected Route
router.get("/buyer", auth, isBuyer, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Buyers',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

router.get("/store", auth, isStoreOwner, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Store owner',
    });
});

module.exports = router;