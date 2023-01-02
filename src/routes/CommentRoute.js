const express = require('express');

// {mergeParams: true} => router중에 /:commentid 같은 것을 사용하기 위해서 존재한다.
const commentRouter = express.Router({mergeParams: true});

const {Comment} = require('../models');
const {isValidObjectId, startSession} = require('mongoose');

commentRouter.post('/:roomId', async(req,res) => {
try{
    let { roomId } = req.params;
    roomId = parseInt(roomId);
    const {
        commentId,
        userId,
        content,
        createdAt
    } = req.body;

    if(typeof commentId !== "number")
    return res.status(400).send({err: "commentId is invalid"});

    if(typeof roomId !== "number")
    return res.status(400).send({err: "roomId is invalid"});

    if(typeof userId !== "string")
    return res.status(400).send({err: "userId is invalid"});

    if(typeof content !== "string")
    return res.status(400).send({err: "content is invalid"});

    if(typeof createdAt !== "string")
    return res.status(400).send({err: "createdAt is invalid"});

    console.log(typeof Comment);
    let comment = new Comment({
        commentId,
        roomId,
        userId,
        content,
        createdAt
    });

    console.log(typeof comment)
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

commentRouter.get("/:roomId", async(req,res) => {
    try{
        let { roomId } = req.params;
    roomId = parseInt(roomId);

        if(typeof roomId !== 'number')
        return res.status(400).send({err: "roomId is invalid"});

        const comments = await Comment.find({ roomId })
        // creat
        .sort({createdAt : -1, commentId : -1});
    return res.status(200).send({comments});
    } catch(err) {
        return res.status(400).send({err: err.message});
    }
    
});

commentRouter.patch("/:roomId/:commentId", async(req,res) => {
    try{
    let {commentId, roomId } = req.params;
    commentId = parseInt(commentId);
    roomId = parseInt(roomId);
    const {
        userId,
        content,
        createdAt
    } = req.body;

    if(typeof commentId !== "number")
    return res.status(400).send({err: "commentId is invalid"});

    if(typeof roomId !== "number")
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
        let {roomId, commentId } = req.params;
        
        roomId = parseInt(roomId);
        commentId = parseInt(commentId);

        if(typeof commentId !== "number")
        return res.status(400).send({err: "commentId is invalid"});
    
        if(typeof roomId !== "number")
        return res.status(400).send({err: "roomId is valid"});
    
        const comment = await Comment.findOneAndDelete({
          commentId,
          roomId,
        }); 
        
        return res.status(202).send({comment});
    }catch(err) {
        return res.status(400).send({err : err.message});
    }
});


module.exports = {commentRouter};