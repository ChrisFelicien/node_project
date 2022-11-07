require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notFound = require("./error/not-found");
const errorHandler = require("./middleware/error-handler");
const productRoute = require("./routes/products");

const app = express();

app.use(express.json());

app.use("/api/v1/products", productRoute);

app.use(notFound);
app.use(errorHandler);

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
