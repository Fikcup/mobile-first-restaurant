const router = require('express').Router();
const apiRoutes = require('./api');

// route /api/
router.use('/api', apiRoutes);

// invalid route response
router.use('/', (req, res) => {
    res.send('Wrong route');
});

module.exports = router;