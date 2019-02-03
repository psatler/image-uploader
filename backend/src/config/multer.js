const multer = require('multer')
const path = require('path') // node js built in libs
const crypto = require('crypto') // node js built in libs

// setting up the multer config
/**
 * dest: folder to where the files will be stored in the system (__dirname refers to /config)
 * storage:
 * limits: we can define file size limit to upload, number of files max to be uploaded, etc
 * fileFilter: 
 * 
 */

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => { // to add a hash in front of the image name
            crypto.randomBytes(16, (err, hash) => { // callback with error and hash (if created successfully)
                if (err) cb(err) // if error, pass to callback to be handled by the controller

                file.key = `${hash.toString('hex')}-${file.originalname}`; // hash + name of the file in the user's computer
                cb(null, file.key) // error is null and also passing the fileName (file.key)
            })
        }
    }),
    // if you want to use s3
    // s3: multerS3({
    //     s3: new aws.S3(),
    // })
}


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'), // so the path will go backwards two times and then go to tmp/uploads. it is used a fallback of the destionation defined below inside diskStorage
    storage: storageTypes["local"],
    limits: {
        fileSize: 2 * 1024 * 1024, // size is defined in bytes (2Mb was defined)
    },
    fileFilter: (req, file, cb) => { // request, file, callback
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true) // first parameter is the error
        } else {
            cb(new Error('Invalid file type'))
        }
    }
}