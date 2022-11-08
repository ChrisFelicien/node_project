const { CustomError } = require("./../utils/CustomeError");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: "fail",
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "fail",
    msg: "Something went wrong, please try again",
  });
};

module.exports = errorHandlerMiddleware;
