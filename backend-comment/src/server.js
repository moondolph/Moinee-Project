require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {commentRouter} = require('./routes');
const mongoose = require('mongoose');
const { swaggerUi, specs } = require('./swagger/swagger');
// const {registerWithEureka} = require('./eureka-client');/

 

const server = async() => {
  try {

    let { MONGO_URI, PORT } = process.env;

    if (!MONGO_URI) throw new Error("MONGO_URI is required");
    if (!PORT) throw new Error("PORT is required");

    app.use(cors({
      origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
      credential: true // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  }));
  

    app.listen(PORT, async () => {
      console.log(`server listening on port ${PORT}`);
    });

    // registerWithEureka();

    

    mongoose.set("strictQuery", false);

    await mongoose.connect(MONGO_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");

    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(specs, { explorer: true })
    );
    app.use(express.json());
    // console.log(typeof commentRouter);

    /**
     * @swagger
     * tags:
     *   name: Comments
     *   description: comment 추가 수정 삭제 조회
     */
    app.use("/comments", commentRouter);

    app.use((err, req, res, next) => {
      // res.locals.error = 오류;
      res.status(err.status);
      res.render("오류");
    });
  } catch (err) {
    console.log(err);
  }
}

server();