const router = require('express').Router();
const {
    getAllProducts,
    getOneProduct,
} = require('../../controllers/product-controller');

// route /api/products/
router.route('/').get(getAllProducts);

// route /api/products/:id
router.route('/:id').get(getOneProduct);

module.exports = router;