const express =  require('express');
const router = express.Router();
const { auth, isStoreOwner, isAdmin } = require("../middlewares/authMiddleware")
const { createInvoice } = require("../controllers/invoiceController")

router.post('/', auth, isStoreOwner, createInvoice);

module.exports = router