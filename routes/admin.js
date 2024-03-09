const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsControllers = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', productsControllers.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productsControllers.postAddProducts);

module.exports = router;
