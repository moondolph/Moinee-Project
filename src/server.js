require('dotenv').config();
const express = require('express');
const app = express();
const {CommentRouter} = require('./routes');
const mongoose = require('mongoose');

const server = async() => {
    try{
        const {MONGO_URI, PORT } = process.env;
        if (!MONGO_URI) throw new Error("MONGO_URI is required");
        if (!PORT) throw new Error("PORT is required");

        await mongoose.connect(MONGO_URI,{
            useNewURLParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log("MongoDB connected");
        app.use(express.json());

        app.use('/Comments',CommentRouter);

        app.listen(PORT, async () =>{
            console.log(`server listening on port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}

server();