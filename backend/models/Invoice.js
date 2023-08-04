const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  // customer: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  name: {
    type: String,
    trim: true,
    required: true
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });


const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
