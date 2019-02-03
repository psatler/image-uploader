// loading env vars
require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const app = express() // instantiating the express app
const mongoose = require('mongoose')
const path = require('path')

/**
 * Database setup
 */
const database = "upload"; // db name
const URL = `mongodb://localhost:27017/${database}`;
mongoose.connect(
    URL,
    {
        useNewUrlParser: true
    }
);


// setting up configs
app.use(express.json()) // express handling messages in json format
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan('dev')) // so we can log the http requests being made
// making local images files accessable from using the /files/nameOfFile.jpg in the url
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));


app.use(require("./routes"))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(3000)