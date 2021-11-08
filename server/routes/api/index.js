const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');

// route /api/users/
router.use('/users', userRoutes);

// route /api/categories/
router.use('/categories', categoryRoutes);

// route /api/products/
router.use('/products', productRoutes);

module.exports = router;