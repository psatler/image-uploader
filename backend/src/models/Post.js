const mongoose = require('mongoose');

// lib to deal with file (create, delete)
const fs = require('fs');
const path = require('path');
const { promisify } = require('util'); // convert old callback to new async format

// creating the schema, defining the field we gonna include for each post
const PostSchema = new mongoose.Schema({
    name: String, // original name
    size: Number,
    key: String, // hash + original name
    url: String, // for amazon s3, or getting it from localhost /files/nameOfFile as shown below
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// creating a middleware to check if you are saving to local disk. Not using arrow function so you can get the context of "this"
// it uses an ENV var
PostSchema.pre('save', function() {
    if(!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
})

// to remove files from local disk or s3
PostSchema.pre('remove', function() {
    if(process.env.STORAGE_TYPE === "local") {
        return promisify(fs.unlink)(
            path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
        )
    }
})

module.exports = mongoose.model('Post', PostSchema);