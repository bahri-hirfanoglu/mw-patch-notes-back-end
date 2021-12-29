const NoteTags = require('../models/noteTags')

const addNoteTag = async function (param) {
    const tag = new NoteTags(param)
    return await tag.save();
}

const getNoteTag = async function (id) {
    const tag = await NoteTags.findById(id)
    return tag;
}

const getNoteTags = async function(){
    const tags = await NoteTags.find();
    return tags;
}

const deleteNoteTag = async function (id) {
    const result = await NoteTags.findByIdAndRemove(id)
    return result;
}

const updateNoteTag = async function(id, param) {
    const result = await NoteTags.findByIdAndUpdate(id, param, {new: true})
    return result
}

module.exports = {
    addNoteTag,
    getNoteTag,
    getNoteTags,
    deleteNoteTag,
    updateNoteTag
}