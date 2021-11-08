const router = require('express').Router();
const {
    getAllCategories,
} = require('../../controllers/category-controller');

// route /api/categories/
router.route('/').get(getAllCategories);

module.exports = router;