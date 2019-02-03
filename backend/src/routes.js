const routes = require('express').Router();

// multer stuff
const multer = require('multer')
const multerConfig = require('./config/multer') // where it is defined the multer configuration
const multerMiddleware = multer(multerConfig).single('file') //file is the name of the field which will store the uploaded file

routes.get('/', (req, res) => {
    return res.json({'hdauhdushd': "hello, world!"})
})

// defining the router with the middleware above
routes.post('/posts', multerMiddleware, (req, res) => {
    console.log(req.file) // .file from express

    return res.json({
        hello: "World"
    })
})


module.exports = routes;