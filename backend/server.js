const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/v1", authRouter);
app.use("/api/v1/product", productRouter);

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
