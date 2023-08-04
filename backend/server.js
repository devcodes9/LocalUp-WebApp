const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const storeRouter = require("./routes/storeRouter");
const invoiceRouter = require("./routes/invoiceRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/invoice", invoiceRouter)

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch(err){
    throw err;
  }
}

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
