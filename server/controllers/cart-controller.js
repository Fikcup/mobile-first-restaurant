const { Cart, CartProducts } = require('../models');

const cartController = {
    /*
        * Cart initializes
        *
        * @return {Object}
    */
    newCart(req, res) {
        Cart.create(req.body)
            .then((cartData) => {
                res.json(cartData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Get user attached to cart
        *
        * @return {Object}
    */
    getOneCart(req, res) {
        Cart.findOne({
            where: {
                userUuid: req.params.userId
            }
        })
            .then((cartData) => {
                res.json(cartData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Get all products in a user's cart
        *
        * @return {Array}
    */
    getAllProductsInCart(req, res) {
        CartProducts.findAll({
            where: {
                cartUuid: req.params.cartId
            }
        })
            .then((cartProductData) => {
                res.json(cartProductData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Add an item to a cart
        *
        * @return {Object}
    */
    addProductToCart(req, res) {
        CartProducts.create({
            cartUuid: req.params.cartId,
            productUuid: req.params.productId,
            quantity: req.body.quantity
        })
            .then((cartProductData) => {
                res.json(cartProductData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Remove an item from the cart
        *
        * @return {Message}
    */
    removeProductFromCart(req, res) {
        CartProducts.destroy({
            where: {
                cartUuid: req.params.cartId,
                productUuid: req.params.productId
            }
        })
            .then(() => {
                res.json({ message: 'Product has been removed from cart.' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Remove all items from the cart
        *
        * @return {Message}
    */
    removeAllProductsFromCart(req, res) {
        CartProducts.destroy({
            where: {
                cartUuid: req.params.cartId
            }
        })
            .then(() => {
                res.json({ message: 'All products have been removed from cart.' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = cartController;