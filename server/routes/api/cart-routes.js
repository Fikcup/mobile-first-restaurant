const router = require('express').Router();
const {
    newCart,
    getOneCart,
    getAllProductsInCart,
    addProductToCart,
    removeProductFromCart,
    removeAllProductsFromCart,
} = require('../../controllers/cart-controller');
const { jwtAuth } = require('../../middleware/auth');

// route /api/carts/
router.route('/').post(newCart);

// route/api/carts/:userId/
router.route('/:userId').get(jwtAuth, getOneCart);

// route/api/carts/:cartId/product/
router.route('/:cartId/product').get(jwtAuth, getAllProductsInCart).delete(jwtAuth, removeAllProductsFromCart);

// route/api/carts/:cartId/product/:productId/
router.route('/:cartId/product/:productId').post(jwtAuth, addProductToCart).delete(jwtAuth, removeProductFromCart);

module.exports = router;