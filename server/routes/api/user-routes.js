const router = require('express').Router();
const {
    loginUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');
const { jwtAuth } = require('../../middleware/auth');

// route /api/users/
router.route('/').post(createUser);

// route /api/users/:email
router.route('/:email').post(loginUser);

// route /api/users/:id
router.route('/:id').get(jwtAuth, getOneUser).put(jwtAuth, updateUser).delete(jwtAuth, deleteUser);

module.exports = router;