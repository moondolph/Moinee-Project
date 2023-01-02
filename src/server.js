require('dotenv').config();
const express = require('express');
const app = express();
const {commentRouter} = require('./routes');
const mongoose = require('mongoose');

const server = async() => {
    try{

        let {MONGO_URI, PORT} = process.env;
        let port = PORT || 9999;

        if (!MONGO_URI) throw new Error("MONGO_URI is required");
        if (!port) throw new Error("PORT is required");

        mongoose.set("strictQuery",false);

        await mongoose.connect(MONGO_URI,{
            useNewURLParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected");
        app.use(express.json());
        console.log(typeof commentRouter);
        app.use('/comments',commentRouter);

        app.use((err, req, res, next) => {
            res.locals.error = 오류;
            res.status(err.status);
            res.render('오류');
        });

        app.listen(port, async()=>{
            console.log(`server listening on port ${port}`);
        });
    }catch(err){
        console.log(err);
    }
}

server();