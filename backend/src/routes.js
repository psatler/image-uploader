const routes = require('express').Router();

// multer stuff
const multer = require('multer')
const multerConfig = require('./config/multer')
const multerMiddleware = multer(multerConfig).single('file') //file is the name given to the stored uploaded file

routes.post('/posts', multerMiddleware, (req, res) => {
    console.log(req.file) // .file from express

    return res.json({
        hello: "World"
    })
})


module.exports = routes;