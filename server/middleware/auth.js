const { axios } = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    jwtAuth: function(req, res, next) {
        try {
            const token = req.headers["x-access-token"];

            let decoded = jwt.verify(token, process.env.SECRET);

            if (decoded !== null) {
                next();
            } else {
                res.status(401).send({ message: "You are not logged in." });
                next();
            }
        } catch (err) {
            res.status(401).send({ message: "You are not logged in." });
            next();
        }
    }
};