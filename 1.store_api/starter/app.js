require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/connectDB");

const app = express();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`The server is runnig on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
