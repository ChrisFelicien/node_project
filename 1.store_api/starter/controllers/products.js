const asyncWrapper = require("./../utils/async-wrapper");
const { createCustomError } = require("./../utils/CustomeError");
const Product = require("../models/product");

exports.getAllProducts = asyncWrapper(async (req, res, next) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: `^${name}`, $options: "i" };
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("rating");
  }

  if (fields) {
    const selectList = fields.split(",").join(" ");
    result = result.select(selectList);
  }

  const page = +req.query.page || 1;
  const limit = +req.query.limit || 7;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;

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
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return next(createCustomError(`No product with iD ${id}`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.updateProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, {
    new: true,
    runValidator: true,
  });

  if (!product) {
    return next(createCustomError(`No product with iD ${id}`, 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

exports.deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return next(createCustomError(`No product with iD ${id}`, 404));
  }

  res.status(200).json({
    status: "success",
    message: "The product has been deleted",
  });
});
