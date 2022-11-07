require("dotenv").config();
const data = require("./products.json");
const Product = require("./models/product");
const connectDB = require("./db/connect");

const manageData = async (data) => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(data);
    console.log("Done");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

manageData(data);
