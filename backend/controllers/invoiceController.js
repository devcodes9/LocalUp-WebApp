const Invoice = require("../models/Invoice");
const Product = require("../models/Product");
const Store = require("../models/Store");

const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);

    if (!invoice) {
      return res.status(401).json({
        success: false,
        message: "Please send mandatory details for creating invoice",
      });
    }

    const updatedStore = await Store.findByIdAndUpdate(invoice.store, {
      $push: { invoices: invoice._id }
    }, {new: true});

    const populatedInvoice = await Invoice.findById(invoice._id)
      .populate({path:"items.product"})

     for(const item of populatedInvoice.items) {
        const buyQty = item.quantity;
        const avlQty = item.product.quantity;

        if(buyQty > avlQty) {
            return res.status(401).json({
                success: false,
                message: "Product Qty not available"
            })
        }
        
        const updatedProduct = await Product.findOneAndUpdate(item.product, {quantity: avlQty - buyQty});
    };

    return res.status(200).json({
      success: true,
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createInvoice };
