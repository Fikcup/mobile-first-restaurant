const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    loginUser(req, res) {
        User.findOne({
            attributes: {
                exclude: ['phone'],
                include: ['password']
            },
            where: {
                email: req.params.email
            }
        })
            .then((userData) => {
                if (!userData) {
                    res.send('Your email or password is incorrect.');
                } else {
                    if (bcrypt.compareSync(req.body.password, userData.password)) {
                        let token = jwt.sign({ id: userData.uuid}, process.env.SECRET);

                        res.json(token);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneUser(req, res) {
        User.findOne({
            where: {
                uuid: req.params.id
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