const routes = require('express').Router();

// multer stuff
const multer = require('multer')
const multerConfig = require('./config/multer') // where it is defined the multer configuration
const multerMiddleware = multer(multerConfig).single('file') //file is the name of the field which will store the uploaded file


/**
 * importing Post model
 */
const Post = require('./models/Post'); // to be used in the /posts endpoint


routes.get('/', (req, res) => {
    return res.json({'hdauhdushd': "hello, world!"})
})

// defining the router with the middleware above
routes.post('/posts', multerMiddleware, async (req, res) => {
    console.log(req.file) // .file from express

    // destructuring and changing var names
    const { originalname: name, size, filename: key } = req.file;
    const post = await Post.create({
        name,
        size,
        key,
        url: '',
    });

    return res.json(post);

    // return res.json({
    //     hello: "World"
    // })
})


module.exports = routes;