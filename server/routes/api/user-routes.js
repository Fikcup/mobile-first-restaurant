const router = require('express').Router();
const {
    getOneUser,
    createUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').post(createUser);

// route /api/users/:id
router.route('/:id').get(getOneUser);

module.exports = router;