const Store = require("../models/Store");
const Product = require("../models/Product");

const getAllProductsFromStore = async (req, res) => {
  try {
    const id = req.params.id;
    const storeDoc = await Store.findOne({ user: id });

    if (!storeDoc) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    const populatedStoreDoc = await storeDoc.populate("products");
    if (populatedStoreDoc.products.length == 0) {
      return res.status(401).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found",
      data: populatedStoreDoc.products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getAllInvoicesFromStore = async (req, res) => {
  const storeId = req.params.id;

  try {
    const store = await Store.findById(storeId).populate("invoices");

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    const invoices = store.invoices;

    return res.status(200).json({
      success: true,
      message: "All invoices from the store retrieved successfully",
      data: invoices,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getAllProductsFromStore, getAllInvoicesFromStore };
