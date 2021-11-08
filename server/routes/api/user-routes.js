const router = require('express').Router();
const {
    getOneUser,
    createUser,
    updateUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').post(createUser);

// route /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser);

module.exports = router;