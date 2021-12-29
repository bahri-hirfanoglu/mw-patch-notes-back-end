const PatchNotesService = require("../services/patchNotesService");
const boom = require("boom");

const _gets = (async) => {
  try {
    const notes = await PatchNotesService.getPatchNote();
    return notes;
  } catch (error) {
    throw boom.boomify(error);
  }
};

const _get = async (req) => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const note = await PatchNotesService.getPatchNotes(id);
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
    const result = await PatchNotesService.updatePatch(id, req);
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

module.exports = {
    _get,
    _gets,
    _add,
    _update,
    _delete
}