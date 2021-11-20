const { axios } = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    jwtAuth: function(req, res, next) {
        try {
            // TODO: get token from header in request and pass into decoded

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