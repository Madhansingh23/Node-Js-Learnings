// let money=true
// if(money){
//     console.log("Buy Stuff");
// }else{
//     console.log("Bring Money");
// }

//mosule wrapper
// console.log("hello nodejs");
// (function (exports,require,module,__filename,__dirname){
//     //code-- every code i swarrapped in the function
//     console.log("hi");
// })();

// console.log(__filename);
// console.log(__dirname);

// function greet(username){
//     console.log("hello",username);
// }
// module.exports=greet;//call func will call 
// // in call.js
// // const greet=require("./hi");
// // greet("Madhan");

// let person1="Madhan"
// let person2="singh"
// let person3="per"
// module.exports={person1,person2,person3};
// //in call.js
// // const {person1,person2,person3}=require("./hi");
// // console.log(person1);
// // console.log(person2);
// // console.log(person3);

// import greet from "./call.js";//connvert both to mj use mjs or to avoid using .mjs setup package.json file

// //this is in call.js
// // function greet(username){
// //     console.log("Hello",username);
// // }
// // export default greet;
// greet("madhan");
// // console.log(__filename);// shows error as program is a common path for bothby package.json
// // console.log(__dirname);// shows error as program is a common path for bothby package.json

// //in call.js
// // let p1="madhan";
// // let p2="singh";
// // let p3="trla";
// // export {p1,p2,p3};
// import {p1,p2,p3} from "./call.js";
// console.log(p1,p2,p3);

//PATH
//import path from "path";
// console.log(path.basename("c:\nodejs\\app.js"));// last file name//app.js
// console.log(path.baesename("c:\nodejs\\app.js",".js"));//lat name
// console.log(path.dirname("c:\nodejs\\app.js"));//dir name//app.js    c:   odejs
// console.log(path.extname("c:\nodejs\\app.js"))//.js
// console.log(path.join("c:","madhan","git","course","kit"));//c:\madhan\git\course\kit
// console.log(path.join("c:","madhan","git","course","kit",".."));//  c:\madhan\git\course
// console.log(path.normalize("c:\\couurse\\redux\\\\\\\store\\\feature\\"));// c:\couurse\redux\store\eature\
// console.log(path.parse(":\madhan\git\course\kit"));\\{root: '',dir: '',base: ':madhangitcoursekit',ext: '',name: ':madhangitcoursekit'}
// console.log(path.parse("c:\madhan\git\course\kit").base);//madhangitcoursekit
// console.log(path.parse("c:\madhan\git\course\kit").name);//madhangitcoursekit
// console.log(path.parse("c:\madhan\git\course\kit").ext);//

//OS
// import os from "os";
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
// console.log(os.freemem());
// console.log(os.totalmem());

//URL
// import {URL} from "url";
// const url=new URL("https://www.whatsapp.com");
// console.log(url.hash);
// console.log(url.host);
// console.log(url.hostname);
// console.log(url.port);
// console.log(url.href);
// console.log(url.protocol);
// console.log(url.search);
// console.log(url.searchParams);
// console.log(url.toString());
// console.log(url.toJSON());

//HTTP
// import http from 'http';
// const server=http.createServer((req,res)=>{
//     // console.log(req);
//     res.write("<h1>Hello From node.js</h1>");
//     res.setHeader("Content-Type","text/html");
//     res.statusCode=404;
//     res.statusMessage="BAD";
//     res.writeHead(202,"Good",{"Content-Type":"text/html"});
//     // res.end("ended");

// });
// server.listen(8000,()=>console.log('Server Up!'));

//httpsroutees
// import http from 'http'
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("<a href='/contact'>Contact me</a>");
//     }
//     else if(req.urll==="/"){
//         res.end("<h1>home</h1>");
//     }
//     else if(req.url==="/about"){
//         res.end("<h2>About Section</h2>");
//        }
//        else if(req.url==="/conatct"){
//         res.end("<a href='/about'>about</a>");
//        }
//        else{
//         res.end("<h3>Page not found</h3>");
//        }
//     console.log(req.URl);
// });
// server.listen(8000,()=>{
//     console.log("Server Up !");
// })

//serving pages
// import http from 'http';
// import fs from 'fs';
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.writeHead(200,"Okk",{"Content-Type":"text/html"});
//         fs.readFile(".public/home.html",(error,data)=>{
//             if(error) throw error;
//             res.end(data);
//         })
//     }
//     else if(req.url==='/about'){
//     }
//     else{

//     }
//     });
//     server.listen(8000,()=>console.log("Server Up!"));

