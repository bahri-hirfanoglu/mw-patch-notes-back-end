const mongoose = require("mongoose");

const noteTagsSchema = new mongoose.Schema({
    name: String,
    color: String,
    createdAt: String
})

module.exports = mongoose.model('NoteTags', noteTagsSchema)