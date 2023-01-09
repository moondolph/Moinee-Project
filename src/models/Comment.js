
const {
    Schema, model, Types:{ObjectId}} = require('mongoose');

const CommentSchema = new Schema(
    {
        roomId: { type: Number, required: true},
        userId: {type: String, required: true},
        content: {type: String, required: true},
        createdAt:{type: Date, required: true},
    },
    {timestamps: true}
    );

CommentSchema.index({createdAt: -1});
//model(document 이름, 사용될 Schema)
const Comment= model("comment", CommentSchema);

module.exports = { Comment, CommentSchema };