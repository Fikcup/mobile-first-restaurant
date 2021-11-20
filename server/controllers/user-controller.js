const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    /*
        * Grabs a user by email and compares to hashed password
        *
        * @return {Token}
    */
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
    /*
        * Get one user by uuid
        *
        * @return {Object}
    */
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
    /*
        * Create user and sign them a token
        *
        * @return {Object}
    */
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                if(!userData) {
                    res.send('Your form data is invalid. Please try again.');
                } else {
                    let token = jwt.sign({ id: userData.uuid}, process.env.SECRET);

                    res.json(token);
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    /*
        * Users can update their own information
        *
        * @return {Message}
    */
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
    /*
        * Users can delete their own account
        *
        * @return {Message}
    */
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