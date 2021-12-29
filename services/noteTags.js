const NoteTags = require('../models/noteTags')

const addNoteTag = async function (param) {
    const tag = new NoteTags(param)
    return await tag.save();
}

const getNoteTag = async function (id) {
    const tag = NoteTags.findById(id)
    return tag;
}

const getNoteTags = async function(){
    const tags = NoteTags.find();
    return tags;
}

const deleteNoteTag = async function (id) {
    const result = NoteTags.findByIdAndRemove(id)
    return result;
}

const updateNoteTag = async function(id, param) {
    const result = NoteTags.findByIdAndUpdate(id, param, {new: true})
}

module.exports = {
    addNoteTag,
    getNoteTag,
    getNoteTags,
    deleteNoteTag,
    updateNoteTag
}