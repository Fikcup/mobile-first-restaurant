const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');

// route /api/users/
router.use('/users', userRoutes);

// route /api/categories/
router.use('/categories', categoryRoutes);

// route /api/products/
router.use('/products', productRoutes);

// router /api/carts/
router.use('/carts', cartRoutes);

module.exports = router;