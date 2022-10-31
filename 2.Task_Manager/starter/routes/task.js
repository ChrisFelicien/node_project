const express = require("express");
const taskController = require("../controllers/task");

const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTaks)
  .post(taskController.createTaks);

router
  .route("/:id")
  .get(taskController.getTask)
  .delete(taskController.deleteTask)
  .patch(taskController.updataTask);

module.exports = router;
