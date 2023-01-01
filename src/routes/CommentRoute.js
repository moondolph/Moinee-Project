const { Router } = require('express');
// {mergeParams: true} => router중에 /:commentid 같은 것을 사용하기 위해서 존재한다.
const commentRouter = Router({mergeParams: true});
const Comment = require('../models');
const {isValidObjectId, startSession} = require('mongoose');

commentRouter.post("/:roomId", async (req,res) => {
let comment;
try{
    const { roomId } = req.params;
    const {
        commentId,
        userId,
        content,
        createdAt
    } = req.body;

    if(typeof commentId !== "bigint")
    return res.status(400).send({err: "commentId is invalid"});

    if(typeof roomId !== "bigint")
    return res.status(400).send({err: "roomId is invalid"});

    if(typeof userId !== "string")
    return res.status(400).send({err: "userId is invalid"});

    if(typeof content !== "string")
    return res.status(400).send({err: "content is invalid"});

    if(typeof createdAt !== "string")
    return res.status(400).send({err: "createdAt is invalid"});

    comment = new Comment({
        commentId,
        roomId,
        userId,
        content,
        createdAt
    });

    await comment.save();
    return res.status(201).send({ comment });
} catch(err) {
  return res.status(400).send({ err: err.message });
}
});

commentRouter.get("/", async (req,res) => {
    try{
        const comments = await Comment.find()
        // creat
        .sort({createdAt : -1, commentId : -1});
    return res.status(200).send({comments});
    } catch(err) {
        return res.status(400).send({err: err.message});
    }
    
});

commentRouter.get("/:roomId", async (req,res) => {
    try{
        const {roomId} = req.params;

        if(typeof roomId !== 'bigint')
        return res.status(400).send({err: "roomId is invalid"});

        const comments = await Comment.find({ roomId })
        // creat
        .sort({createdAt : -1, commentId : -1});
    return res.status(200).send({comments});
    } catch(err) {
        return res.status(400).send({err: err.message});
    }
    
});

commentRouter.put("/:roomId/:commentId", async (req,res) => {
    try{
    const {commentId, roomId } = req.params;
    const {
        userId,
        content,
        createdAt
    } = req.body;

    if(typeof commentId !== "bigint")
    return res.status(400).send({err: "commentId is invalid"});

    if(typeof roomId !== "bigint")
    return res.status(400).send({err: "roomId is valid"});

    if(typeof userId !== "string")
    return res.status(400).send({err: "userId is invalid"});

    if(typeof content !== "string")
    return res.status(400).send({err: "content is invalid"});

    if(typeof createdAt !== "string")
    return res.status(400).send({err: "createdAt is invalid"});

    const comment = await Comment.findOneAndUpdate(
      { commentId },
      {
        roomId,
        userId,
        content,
        createdAt,
      },
      {new: true},
    );

    return res.status(200).send({ comment });
}catch(err){
    return res.status(400).send({err : err.message});
}
});

commentRouter.delete("/:roomId/:commentId", async (req,res) => {
    try{
        const {roomId, commentId } = req.params;
    
        if(typeof commentId !== "bigint")
        return res.status(400).send({err: "commentId is invalid"});
    
        if(typeof roomId !== "bigint")
        return res.status(400).send({err: "roomId is valid"});
    
        const comment = await Comment.findOneAndDelete({
          commentId,
          roomId,
        }); 
        
        return res.status(202).send(comment);
    }catch(err) {
        return res.status(400).send({err : err.message});
    }
});


module.exports = {commentRouter};