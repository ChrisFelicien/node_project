const Task = require("../Model/task");

exports.getAllTaks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: "Success",
      result: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        status: "Fail",
        message: `No task wi the ID: ${taskId}`,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};

exports.createTaks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};

exports.updataTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task)
      return res.status(404).json({
        status: "Fail",
        message: `No task wi the ID: ${taskId}`,
      });

    return res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(500).json({
        status: "fail",
        message: `No task with ID: ${taskId}`,
      });
    }
    return res.status(202).json({
      status: "success",
      message: "The task has been deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};
