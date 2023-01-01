
const {
    Schema, model, Types: { ObjectId }, } = require('mongoose');

const CommentSchema = new Schema(
    {
        commentId: { type: Long, required: true, unique:true },
        roomId: { type: Long, required: true, index: true},
        userId: {type: String, required: true},
        content: {type: String, required: true},
        createdAt:{type: String, required: true},
    },
    {timestamps: true}
    );

CommentSchema.index({blog: 1, createdAt: -1});
//model(document 이름, 사용될 Schema)
const Comment= model("comment", CommentSchema);

module.exports = {Comment, CommentSchema};