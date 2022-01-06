const PatchNotes = require("../models/patchNotes");

const addPatchNote = async function (param) {
  const note = new PatchNotes(param);
  return await note.save();
};

const getPatchNote = async function (id) {
  const note = await PatchNotes.findById(id);
  return note;
};

const getTagNotes = async function (id) {
  const notes = await PatchNotes.find({tagId: id})
  return notes
}
const getPatchNotes = async function () {
  const notes = await PatchNotes.find();
  return notes;
};

const deletePatchNote = async function (id) {
  const result = await PatchNotes.findByIdAndDelete(id);
  return result;
};

const updatePatch = async function (id, param) {
  const result = await PatchNotes.findByIdAndUpdate(id, param, { new: true });
  return result;
};

module.exports = {
    addPatchNote,
    getPatchNote,
    getPatchNotes,
    deletePatchNote,
    updatePatch,
    getTagNotes
}