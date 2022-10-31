exports.getAllTaks = (req, res) => {
  res.send("Hello");
};

exports.getTask = (req, res) => {
  res.send("Single task");
};

exports.createTaks = (req, res) => {
  console.log(req.body);
  res.send("Post request");
};

exports.updataTask = (req, res) => {
  res.send("Updating a task");
};

exports.deleteTask = (req, res) => {
  res.send("Deleting the task");
};
