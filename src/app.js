require("dotenv").config();

// const swaggerUi = require('swagger-ui-express');
// const swaggerFile = require('../swagger/swagger_output.json');

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// const mongoDB = require("./database/dbConnect.js");
// mongoDB.connect();

app.get("/", (req, res) => {
    res.send({message: 'Listening'});
});


module.exports = app;