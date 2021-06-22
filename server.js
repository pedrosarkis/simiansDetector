const express = require('express');

const server = express();

require('dotenv').config()

server.use(express.json());

require('./app/helper/db/connection').connectDatabase();
const simianRoute = require('./app/routes/index');

server.use('/', simianRoute);

const PORT = process.env.PORT || 3000;

server.listen(PORT);