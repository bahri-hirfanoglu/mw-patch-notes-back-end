const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const patchNotesSchema = new mongoose.Schema(
  {
    title: String,
    detail: String,
    author: String,
    patchName: String,
    tagId: ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PatchNotes", patchNotesSchema)