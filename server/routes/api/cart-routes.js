const router = require('express').Router();
const {
    newCart,
    getOneCart,
    getAllProductsInCart,
    addProductToCart,
    removeProductFromCart,
} = require('../../controllers/cart-controller');

// route /api/carts/
router.route('/').post(newCart);

// route/api/carts/:cartId/
router.route('/:cartId').get(getOneCart);

// route/api/carts/:cartId/product/
router.route('/:cartId/product').get(getAllProductsInCart);

// route/api/carts/:cartId/product/:productId/
router.route('/:cartId/product/:productId').post(addProductToCart).delete(removeProductFromCart);

module.exports = router;