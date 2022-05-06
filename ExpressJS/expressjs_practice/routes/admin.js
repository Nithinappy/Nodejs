const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const products = [];
router.get("/add_product", (req, res, next) => {
  /* represnting the paths in three ways  */
  // res.sendFile(path.join(__dirname, "../", "views", "add_product.html"));//normal way
  // res.sendFile(path.join(__dirname, "..", "views", "add_product.html"));//good way
  res.sendFile(path.join(rootDir, "views", "add_product.html")); //best way
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});
// module.exports = router;
exports.router = router;
exports.products = products;
