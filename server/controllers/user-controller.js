const { User } = require('../models');

const userController = {
    getOneUser(req, res) {
        User.findOne({
            where: {
                email: req.params.email
            }
        })
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.update(req.body, {
            where: {
                uuid: req.params.id
            },
            individualHooks: true
        })
            .then(() => {
                res.json({ message: "User has been updated" });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteUser(req, res) {
        User.destroy({
            where: {
                uuid: req.params.id
            }
        })
            .then(() => {
                res.json({ message: "User has been deleted" });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
};

module.exports = userController;