// start with npm init and provide the details from beginning in the directory to create package.json
import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(202,"GOod",{"content-type":"text/html"});
    res.write("<h1>Hello from nodejs server</h1>");
});
server.listen(8000,()=>console.log("Server Up!"));