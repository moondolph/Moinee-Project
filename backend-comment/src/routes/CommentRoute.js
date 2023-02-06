const express = require('express');

// {mergeParams: true} => router중에 /:commentid 같은 것을 사용하기 위해서 존재한다.
const commentRouter = express.Router({mergeParams: true});

const {Comment} = require('../models');
const {isValidObjectId, startSession} = require('mongoose');



commentRouter.post('/:roomId', async(req,res) => {
try{
    let { roomId } = req.params;
    
    // if(!req.headers['Authorization']){
    //     return res.status(401).send({err: "token is invalid"});
    // }
    roomId = parseInt(roomId);
    const {
        userId,
        content
    } = req.body;

    if(!roomId || typeof roomId !== "number")
    return res.status(400).send({err: "roomId is invalid"});

    if(!userId || typeof userId !== "string")
    return res.status(400).send({err: "userId is invalid"});

    if(!content || typeof content !== "string")
    return res.status(400).send({err: "content is invalid"});


    //console.log(typeof Comment);
    let comment = new Comment({
        roomId,
        userId,
        content,
        createdAt:Date.now()
    });

    //console.log(typeof comment)
    await comment.save();
    return res.status(201).send({ comment });
} catch(err) {
    
  return res.status(400).send({ err: err.message });
}
});

//------------------------------------------------------------------------------




//------------------------------------------------------------------------------

commentRouter.get("/", async (req,res) => {
    try{
    //     if(!req.headers["Authorization"])
    // return res.status(401).send({err: "token is invalid"});
        const comments = await Comment.find()
        // create
        .sort({createdAt : -1});
    return res.status(200).send({comments});
    } catch(err) {
        return res.status(400).send({err: err.message});
    }
    
});

//------------------------------------------------------------------------------
commentRouter.get("/:roomId", async(req,res) => {
    try{
        let { roomId } = req.params;
   
        if(!roomId || typeof roomId !== 'string')
        return res.status(400).send({err: "roomId is invalid"});

        roomId = parseInt(roomId);
        const comments = await Comment.find({ roomId })
        // creat
        .sort({createdAt : -1});
    return res.status(200).send({comments});
    } catch(err) {
        return res.status(400).send({err: err.message});
    }
    
});

//------------------------------------------------------------------------------
commentRouter.patch("/:roomId/:_id", async(req,res) => {
    try{
    let {_id, roomId } = req.params;
    roomId = parseInt(roomId);
    const { 
        content
    } = req.body;


    if(!isValidObjectId(_id))
    return res.status(400).send({err: "commentId is invalid"});

    if(typeof roomId !== "number")
    return res.status(400).send({err: "roomId is valid"});

    if(typeof content !== "string")
    return res.status(400).send({err: "content is invalid"});

    const comment = await Comment.findOneAndUpdate(
      { _id, roomId},
      {
        content
      },
      {new: true},
    );

    return res.status(200).send({ comment });
}catch(err){
    return res.status(400).send({err : err.message});
}
});

//------------------------------------------------------------------------------
commentRouter.delete("/:roomId/:_id", async (req,res) => {
    try{
        let {roomId, _id } = req.params;
        
        roomId = parseInt(roomId);

        if(!isValidObjectId(_id))
        return res.status(400).send({err: "commentId is invalid"});
    
        if(typeof roomId !== "number")
        return res.status(400).send({err: "roomId is valid"});
    
        const comment = await Comment.findOneAndDelete({
          _id,
          roomId,
        }); 
        
        return res.status(202).send({comment});
    }catch(err) {
        return res.status(400).send({err : err.message});
    }
});


module.exports = {commentRouter};