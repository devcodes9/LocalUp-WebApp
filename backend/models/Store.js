const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    invoices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Invoice'
    }]
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
