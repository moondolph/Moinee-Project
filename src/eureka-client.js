// const Eureka = require("eureka-client").Eureka;
// const PORT = process.env;

// exports.registerWithEureka = function(){

//   const client = new Eureka({
//     // application instance information
//     instance: {
//       app: "comments",
//       hostName: "localhost",
//       ipAddr: "127.0.0.1",
//       statusPageUrl:"http://localhost:9800/info",
//       port: {
//         "$" : PORT,
//         "@enabled" : true,
//       },
//       vipAddress: "comments",
//       dataCenterInfo: {
//         "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
//         name: "MyOwn",
//       },
//     },
//     eureka: {
//       // eureka server host / port
//       host: "127.0.0.1",
//       port: 8761,
//       servicePath: "/eureka/apps/",
//       // "serviceUrls": "http://localhost:8761/eureka/apps/"
//     },
//   });




// //example configuration
// // const client = new Eureka({
// // //application instance information
// //   instance: {
// //     app: "comments",
// //     // instanceId: `localhost:iljo-comments:${PORT}`,
// //     hostName: "localhost",
// //     ipAddr: "127.0.0.1",
// //     statusPageUrl: `http://localhost:${PORT}`,
// //     vipAddress: "comments",
// //     port: {
// //       "$": PORT,
// //       "@enabled": "true",
// //     },
// //     dataCenterInfo: {
// //       "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
// //       name:"MyOwn",
// //     },
// //     registerWithEureka: true,
// //     fetchRegistry: true,
// //     status:"UP"
// //   },
// //   eureka: {
// //     // eureka server host / port
// //     host: "127.0.0.1",
// //     port: 8761,
// //     servicePath: "/eureka/app"
// //   },
// // });

// // client.logger.level("debug");
//     client.start((error) => {
//       console.log(error.message + " incomplete" || "complete");
//   });

// // function exitHandler(options, exitCode){
// //   if(options.cleanup){
// //   }
// //   if(exitCode || exitCode === 0) console.log(exitCode);
// //   if(options.exit){
// //     client.stop();
// //   }
// // }

// // client.on("deregistered", () =>{

// // })

// }