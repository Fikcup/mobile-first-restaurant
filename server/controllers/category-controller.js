const { Category } = require('../models');

const categoryController = {
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
};

module.exports = categoryController;