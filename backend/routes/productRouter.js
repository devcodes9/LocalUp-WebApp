const { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct} = require("../controllers/productController")
const { auth, isStoreOwner, isAdmin } = require("../middlewares/authMiddleware")
const express = require("express");
router = express.Router();

router.get("/:id", auth, isStoreOwner,  getProduct);
router.get("/", auth, isAdmin, getAllProducts);
router.put("/:id", auth, isStoreOwner, updateProduct);
router.delete("/:id", auth, isStoreOwner, deleteProduct);
router.post("/createproduct", auth, isStoreOwner, createProduct);

module.exports = router;