const graphql = require("graphql");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = graphql;

const patchNoteController = require("../controllers/pathNotesController");
const noteTagsController = require("../controllers/noteTagsController");
const { deleteNoteTag } = require("../services/noteTagsService");

const patchNoteType = new GraphQLObjectType({
  name: "PatchNotes",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    detail: { type: GraphQLString },
    author: {type: GraphQLString},
    patchName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    tagId: { type: GraphQLID },
    tag: {
      type: noteTagType,
      async resolve(parent, args) {
        return await noteTagsController._get({ id: parent.tagId });
      },
    },
  }),
});

const noteTagType = new GraphQLObjectType({
  name: "NoteTags",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    patchNotes: {
      type: patchNoteType,
      async resolve(parent, args) {
        return await patchNoteController._getTag({ id: parent._id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    patchNote: {
      type: patchNoteType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await patchNoteController._get(args);
      },
    },
    patchNotes: {
      type: new GraphQLList(patchNoteType),
      async resolve(parent, args) {
        return await patchNoteController._gets();
      },
    },
    noteTag: {
      type: noteTagType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await noteTagsController._get(args);
      },
    },
    noteTags: {
      type: new GraphQLList(noteTagType),
      async resolve(parent, args) {
        return await noteTagsController._gets();
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        addPathcNote: {
            type: patchNoteType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                detail: { type: new GraphQLNonNull(GraphQLString) },
                patchName: { type: new GraphQLNonNull(GraphQLString) },
                author: { type: new GraphQLNonNull(GraphQLString) },
                createdAt: { type: new GraphQLNonNull(GraphQLString) },
                tagId: { type: GraphQLID },
            },
            async resolve(parent, args) {
                return await patchNoteController._add(args)
            }
        },
        updatePatchNote: {
            type: patchNoteType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLString },
                detail: { type: GraphQLString },
                patchName: { type: GraphQLString },
                author: { type: GraphQLString },
                tagId: { type: GraphQLID },
            },
            async resolve(parent, args) {
                return await patchNoteController._update(args)
            }
        },
        deletePatchNote: {
            type: patchNoteType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parent, args) {
                return await patchNoteController._delete(args)
            }
        },
        addNoteTag: {
            type: noteTagType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                color: { type: new GraphQLNonNull(GraphQLString) },
                createdAt: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                return await noteTagsController._add(args)
            }
        },
        updateNoteTag: {
            type: noteTagType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                color: { type: new GraphQLString },
            },
            async resolve(parent, args) {
                return await noteTagsController._update(args)
            }
        },
        deleteNoteTag: {
            type: noteTagType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            async resolve(parent, args) {
                return await noteTagsController._delete(args)
            }
        }
    }
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutations
})