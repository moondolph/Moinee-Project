const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");
const {PORT} = process.env;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "iljocomments",
      description:
        "This server is about iljocomments",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // 요청 URL
      },
    ],
  },
  apis: ["../routes/*.js","./swagger/*", "../models/*.js"], //Swagger 파일 연동
}

const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }