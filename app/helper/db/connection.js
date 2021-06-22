const Mongoose = require('mongoose');

const URL = process.env.URL;

const connectDatabase = () => {
    const connectionOptions = { reconnectTries: Number.MAX_VALUE,reconnectInterval: 500, useNewUrlParser: true };

    Mongoose.connect(URL, connectionOptions);

    Mongoose.set('useCreateIndex', true);
}

exports.connectDatabase = connectDatabase;