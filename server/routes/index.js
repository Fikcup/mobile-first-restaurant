const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoutes = require('./main-routes');
const cartRoutes = require('./cart-routes');

// route /api/
router.use('/api', apiRoutes);

// route /
router.use('/', mainRoutes);

// route /cart/
router.use('/cart', cartRoutes);

// invalid route response
router.use('/', (req, res) => {
    res.send('Wrong route');
});

module.exports = router;