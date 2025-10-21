import express from "express";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import bodyParser from "body-parser";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

const mongoDBUri =
  "mongodb+srv://13061979:BTGU3Uq4YrpJ9Yke@lunageek.ci2tqjs.mongodb.net/";

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoDBUri);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

connectToMongoDB();

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

// app.listen(5000, () => {
//   console.log("Server started at http://127.0.0.1:5000");
// });
app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port 5000");
});
