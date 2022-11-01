const { CustomAPIError } = require("./../error/customError");

const errrorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      status: "Fail",
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "Fail",
    message: "Something went wrong try again later",
  });
};

module.exports = errrorHandlerMiddleware;
