const express = require('express');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});