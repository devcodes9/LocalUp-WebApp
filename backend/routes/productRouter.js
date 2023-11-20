const { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct, searchProductBusiness} = require("../controllers/productController")
const { auth, isStoreOwner, isAdmin } = require("../middlewares/authMiddleware")
const express = require("express");
router = express.Router();

router.get("/:id", auth, isStoreOwner,  getProduct);
router.get("/allproducts", auth, isAdmin, getAllProducts);
router.put("/:id", auth, isStoreOwner, updateProduct);
router.delete("/:id", auth, isStoreOwner, deleteProduct);
router.post("/createproduct", auth, isStoreOwner, createProduct);
router.get("/", auth, searchProductBusiness)
module.exports = router;