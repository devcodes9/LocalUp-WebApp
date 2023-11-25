const Product = require("../models/Product");
const Store = require("../models/Store");

const createProduct = async (req, res) => {
  try {
    console.log("Req:", req.user);
    const id = req.user.id;

    const storeDoc = await Store.findOne({ user: id });

    if (!storeDoc) {
      return res.status(401).json({
        success: false,
        message: "Store not found",
      });
    }
    
    req.body.store = storeDoc._id;
    const product = await Product.create(req.body);

    if (!product) {
      return res.status(401).json({
        success: false,
        message: "Please fill mandatory details for creating product",
      });
    }
    
    const updatedStore = await Store.findOneAndUpdate(storeDoc, {$push: { products: product._id }})

    return res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(401).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(401).json({
        success: false,
        message: "Product not found",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(req.query);

    if (!products) {
      return res.status(401).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product and store it for later use
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete the product from the Product collection
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // Delete the product from the Store's products array
    const store = await Store.findOneAndUpdate(
      { products: productId },
      { $pull: { products: productId } },
      { new: true }
    );

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: {
        deletedProduct,
        store,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const searchProductBusiness = async (req, res) => {
  try {
    console.log("Req:", req);
    const { query } = req.query;
    const productSearchResults = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).populate('store');

    const businessSearchResults = await Store.find({
      $or: [{ name: { $regex: query, $options: "i" } }],
    }).populate("products");

    let results = productSearchResults;
    businessSearchResults.forEach((res) => {
      
      results = results.concat(res.products);
    });

    return res.status(200).json({
      success: true,
      message: "Search results fetched successfully",
      data: results,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct, searchProductBusiness};