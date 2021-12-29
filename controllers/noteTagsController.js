const NoteTagsServices = require('../services/noteTagsService')
const boom = require('boom')

const _gets = async () => {
    try {
      const notes = await NoteTagsServices.getNoteTags();
      return notes;
    } catch (error) {
      throw boom.boomify(error);
    }
  };
  
  const _get = async (req) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const note = await NoteTagsServices.getNoteTag(id);
      return note;
    } catch (error) {
      throw boom.boomify(error);
    }
  };
  
  const _add = async (req) => {
    try {
      const result = await NoteTagsServices.addNoteTag(req);
      return result;
    } catch (error) {
      throw boom.boomify(error);
    }
  };
  
  const _update = async (req) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const data =  req.params === undefined ? req : req.params
      const result = await NoteTagsServices.updateNoteTag(id, data);
      return result;
    } catch (error) {
      throw boom.boomify(error);
    }
  };
  
  const _delete = async (req) => {
    try {
      const id = req.params === undefined ? req.id : req.params.id;
      const result = await NoteTagsServices.deleteNoteTag(id);
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