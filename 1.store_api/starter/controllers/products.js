const asyncWrapper = require("./../utils/async-wrapper");

exports.getAllProducts = asyncWrapper(async (req, res, next) => {
  return res.status(200).json({
    status: "Success",
    message: "The all products is working",
  });
});

exports.createProduct = asyncWrapper(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "Product created",
  });
});

exports.getSingleProduct = asyncWrapper(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Get single product done",
  });
});

exports.updateProduct = asyncWrapper(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Update product done",
  });
});

exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Delete product done",
  });
});
