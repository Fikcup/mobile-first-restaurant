const { Product } = require('../models');

const productController = {
    /*
        * All product information
        *
        * @return {Object}
    */
    getAllProducts(req, res) {
        Product.findAll()
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Get individual project information
        *
        * @return {Object}
    */
    getOneProduct(req, res) {
        Product.findOne({
            where: {
                uuid: req.params.id
            }
        })
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Get all products within a category
        *
        * @return {Object}
    */
    getAllProductsInCategory(req, res) {
        Product.findAll({
            where: {
                categoryUuid: req.params.categoryId
            }
        })
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = productController;