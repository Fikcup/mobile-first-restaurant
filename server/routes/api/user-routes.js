const router = require('express').Router();
const {
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').post(createUser);

// route /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;