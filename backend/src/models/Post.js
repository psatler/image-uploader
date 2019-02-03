const mongoose = require('mongoose');

// creating the schema, defining the field we gonna include for each post
const PostSchema = new mongoose.Schema({
    name: String, // original name
    size: Number,
    key: String, // hash + original name
    url: String, // for amazon s3
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Post', PostSchema);