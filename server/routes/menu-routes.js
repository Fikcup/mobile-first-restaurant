const router = require('express').Router();
const axios = require('axios').default;

// route /menu/
router.get('/', async (req, res) => {
    const categoryData = await axios.get(`http:/localhost:3001/api/categories`);
    console.log(categoryData);
    console.log('Executing...');

    // {categoryData.map((category) => {
    //     <Category
    //         name = {category.name}
    //     />
    // })}
}); 

module.exports = router;