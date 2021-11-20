const { Category } = require('../models');

const categoryController = {
    /*
        * Get all category information
        *
        * @return {Object}
    */
    getAllCategories(req, res) {
        Category.findAll()
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Get one categories' information
        *
        * @return {Object}
    */
    getOneCategory(req, res) {
        Category.findOne({
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
    }
};

module.exports = categoryController;