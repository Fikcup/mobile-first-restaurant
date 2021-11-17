const router = require('express').Router();
const {
    getAllProducts,
    getOneProduct,
    getAllProductsInCategory,
} = require('../../controllers/product-controller');

// route /api/products/
router.route('/').get(getAllProducts);

// route /api/products/:id
router.route('/:id').get(getOneProduct);

// route /api/products/category/:categoryId
router.route('/category/:categoryId').get(getAllProductsInCategory);

module.exports = router;