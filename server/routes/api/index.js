const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');

// route /api/users/
router.use('/users', userRoutes);

// route /api/categories/
router.use('/categories', categoryRoutes);

module.exports = router;