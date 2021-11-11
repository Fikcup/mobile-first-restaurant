const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes = require('./main-routes');
const cartRoutes = require('./cart-routes');
const menuRoutes = require('./menu-routes');

// route /api/
router.use('/api', apiRoutes);

// route /
router.use('/', mainRoutes);

// route /menu/
router.use('/menu', menuRoutes);

// route /cart/
router.use('/cart', cartRoutes);

// invalid route response
router.use('/', (req, res) => {
    res.send('Wrong route');
});

module.exports = router;