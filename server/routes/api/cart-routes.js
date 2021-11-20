const router = require('express').Router();
const {
    newCart,
    getOneCart,
    getAllProductsInCart,
    addProductToCart,
    removeProductFromCart,
    removeAllProductsFromCart,
} = require('../../controllers/cart-controller');

// route /api/carts/
router.route('/').post(newCart);

// route/api/carts/:userId/
router.route('/:userId').get(getOneCart);

// route/api/carts/:cartId/product/
router.route('/:cartId/product').get(getAllProductsInCart).delete(removeAllProductsFromCart);

// route/api/carts/:cartId/product/:productId/
router.route('/:cartId/product/:productId').post(addProductToCart).delete(removeProductFromCart);

module.exports = router;