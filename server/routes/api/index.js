const router = require('express').Router();
const userRoutes = require('./user-routes');

// route /api/users/
router.use('/users', userRoutes);

module.exports = router;