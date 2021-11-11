const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { axios } = require('axios');

router.get('/login', async (req, res) => {
    // TODO: navigate to login component
});

router.post('/login/send', async (req, res) => {
    try {
        var token = jwt.sign({ id: res.uuid }, process.env.SECRET, {
            expiresIn: 86400
        });

        axios.post(`/api/auth`, { 
            headers: {
                Authorization: token
            } 
        });

        res.status(200).send({ auth: true, token: token});
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    // TODO: navigate to signup component
});

router.post('/signup/send', async (req, res) => {
    try {
        jwt.sign({ id: res.uuid }, process.env.SECRET, {
            expiresIn: 86400
        });

        axios.post(`/api/auth`, { 
            headers: {
                Authorization: token
            } 
        });

        res.status(200).send({ auth: true, token: token});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;