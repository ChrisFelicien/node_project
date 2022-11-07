const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("Hello i am running");
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again Felicien" });
};

module.exports = errorHandlerMiddleware;
