const express = require('express')
const morgan = require('morgan')
const app = express()

// setting up configs
app.use(express.json()) // express handling messages in json format
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan('dev')) // so we can log the http requests being made



app.use(require("./routes"))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(3000)