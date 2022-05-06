const path = require("path");
const productController = require("../controllers/product");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", productController.getProducts);

module.exports = router;
