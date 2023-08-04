const express =  require('express');
const router = express.Router();
const { auth, isStoreOwner, isAdmin } = require("../middlewares/authMiddleware")
const {getAllProductsFromStore, getAllInvoicesFromStore} = require("../controllers/storeController")

router.get("/products/:id", auth, isStoreOwner, getAllProductsFromStore);
router.get("/invoices/:id", auth, isStoreOwner, getAllInvoicesFromStore);

module.exports = router;