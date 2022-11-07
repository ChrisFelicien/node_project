const asyncWrapper = require("./../utils/async-wrapper");
const Product = require("../models/product");
exports.getAllProducts = asyncWrapper(async (req, res, next) => {
  const products = await Product.find();

  return res.status(200).json({
    status: "Success",
    result: products.length,
    data: {
      products,
    },
  });
});

exports.createProduct = asyncWrapper(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
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
