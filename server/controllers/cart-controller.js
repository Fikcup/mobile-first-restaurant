const { Cart, CartProducts } = require('../models');

const cartController = {
    newCart(req, res) {
        Cart.create(req.body)
            .then((cartData) => {
                res.json(cartData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneCart(req, res) {
        Cart.findOne({
            where: {
                uuid: req.params.cartId
            }
        })
            .then((cartData) => {
                res.json(cartData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getAllProductsInCart(req, res) {
        CartProducts.findAll({
            where: {
                cartUuid: req.params.cartId
            }
        })
            .then((cartProductData) => {
                res.json(cartProductData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addProductToCart(req, res) {
        CartProducts.create({
            cartUuid: req.params.cartId,
            productUuid: req.params.productId,
            quantity: req.body.quantity
        })
            .then((cartProductData) => {
                res.json(cartProductData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = cartController;