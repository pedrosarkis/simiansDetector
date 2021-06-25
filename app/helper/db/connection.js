const Mongoose = require('mongoose');

/* istanbul ignore next */
const URL = process.env.NODE_ENV === 'test' ? process.env.URL_TEST : process.env.URL;
console.log(process.env.NODE_ENV === 'test', 'node_env');

const connectDatabase = () => {
    const connectionOptions = { reconnectTries: Number.MAX_VALUE,reconnectInterval: 500, useNewUrlParser: true };

    Mongoose.connect(URL, connectionOptions);

    Mongoose.set('useCreateIndex', true);
}

exports.connectDatabase = connectDatabase;