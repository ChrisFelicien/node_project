require("dotenv").config();
const express = require("express");

const connectDB = require("./utils/connectDB");
const tasksRoute = require("./routes/task");
const pageNotFound = require("./middlewares/pageNotFound");

const app = express();

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasksRoute);
app.use("*", pageNotFound);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`The app is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
