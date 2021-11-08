const router = require('express').Router();
const {
    getAllCategories,
    getOneCategory,
} = require('../../controllers/category-controller');

// route /api/categories/
router.route('/').get(getAllCategories);

// route /api/categories/:id
router.route('/:id').get(getOneCategory);

module.exports = router;