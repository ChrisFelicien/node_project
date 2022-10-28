require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const startServer = () => {
  try {
    app.listen(port, () => console.log(`The server's running`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
