const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const sequelize = require('./config/connection');
const models = require('./models');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(logger('dev'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});