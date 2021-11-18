const router = require('express').Router();
const {
    loginUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').post(createUser);

// route /api/users/:email
router.route('/:email').post(loginUser);

// route /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;