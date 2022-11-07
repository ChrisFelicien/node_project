const notFound = (req, res, next) =>
  res.status(404).json({
    status: "Fail",
    message: "Page not found",
  });

module.exports = notFound;
