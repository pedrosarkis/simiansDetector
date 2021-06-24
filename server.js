const express = require('express');

const server = express();

require('dotenv').config()

server.use(express.json());

require('./app/helper/db/connection').connectDatabase();
const simianRoute = require('./app/routes/index');

server.use('/', simianRoute);

const port = process.env.PORT || 3000;

server.listen(port);

module.exports = server