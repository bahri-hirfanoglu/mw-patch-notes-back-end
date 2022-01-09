const PatchNotesService = require("../services/patchNotesService");
const boom = require("boom");

const _gets = async () => {
  try {
    const notes = await PatchNotesService.getPatchNotes();
    return notes;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _get = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const note = await PatchNotesService.getPatchNote(id);
    return note;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _getTag = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const note = await PatchNotesService.getTagNotes(id);
    return note;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _add = async (req) => {
  try {
    const result = await PatchNotesService.addPatchNote(req);
    return result;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _update = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const data = req.params === undefined ? req : req.params;
    const result = await PatchNotesService.updatePatch(id, data);
    return result;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _delete = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const result = await PatchNotesService.deletePatchNote(id);
    return result;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _search = async (req) => {
  try {
    const value = req.params === undefined ? req.search : req.params.search;
    const result = await PatchNotesService.searchPatch(value);
    return result;
  } catch (error) {
    throw boom.boomify(error);
  }
};
module.exports = {
  _get,
  _gets,
  _getTag,
  _add,
  _update,
  _delete,
  _search
};
