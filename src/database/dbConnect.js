const URL_MONGO = process.env.URL_MONGO;

const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    connect
};