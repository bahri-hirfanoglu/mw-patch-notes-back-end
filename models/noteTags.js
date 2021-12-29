const mongoose = require("mongoose");

const noteTagsSchema = new mongoose.Schema({
    name: String,
    color: String
}, {timestamps: true})

module.exports = mongoose.model('NoteTags', noteTagsSchema)