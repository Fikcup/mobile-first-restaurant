const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/login', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
        res.redirect('/');
    }
});

router.get('/signup', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
        res.redirect('/');
    }
});

module.exports = router;