const Task = require("../Model/task");
const asyncWrapper = require("./../middlewares/asyncWrapper");
const { createCustomError } = require("../error/customError");

exports.getAllTaks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({
    status: "Success",
    result: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);

  if (!task) {
    return next(createCustomError(`No task wi the ID: ${taskId}`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.createTaks = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.updataTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task)
    return next(createCustomError(`No task wi the ID: ${taskId}`, 404));

  return res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    return next(createCustomError(`No task wi the ID: ${taskId}`, 404));
  }
  return res.status(202).json({
    status: "success",
    message: "The task has been deleted",
  });
});
