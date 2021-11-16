const router = require('express').Router();
const axios = require('axios').default;

// route /menu/
router.get('/', async (req, res) => {
    const response = await axios.get(`http:/localhost:3001/api/categories`)
    .then((categoryData) => {
        console.log('Map data into Category component');
        console.log(categoryData);
    });

    if (response.ok) {
        console.log('Axios request working');
    }

    console.log(categoryData);
    console.log('Executing...');
}); 

module.exports = router;