const routes = require('express').Router();

// multer stuff
const multer = require('multer')
const multerConfig = require('./config/multer') // where it is defined the multer configuration
const multerMiddleware = multer(multerConfig).single('file') //file is the name of the field which will store the uploaded file

// const multer_s3 = require(multers3) // if you want to have an alternative way of storing the images, like on Amazon S3


/**
 * importing Post model
 */
const Post = require('./models/Post'); // to be used in the /posts endpoint


routes.get('/', (req, res) => {
    return res.json({'hdauhdushd': "hello, world!"})
})


/**
 * GET posts
 */
routes.get('/posts', async (req, res) => {
    const posts = await Post.find();

    return res.json(posts);
})

/**
 * POST posts
 */
// defining the router with the middleware above
routes.post('/posts', multerMiddleware, async (req, res) => {
    console.log(req.file) // .file from express

    // destructuring and changing var names, and also setting a default value for url if it's not defined
    const { originalname: name, size, key, location: url = "" } = req.file;
    const post = await Post.create({
        name,
        size,
        key,
        url,
    });

    return res.json(post);

    // return res.json({
    //     hello: "World"
    // })
});

/**
 * DELETE posts
 */
routes.delete('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);

    await post.remove();

    return res.send();
})


module.exports = routes;