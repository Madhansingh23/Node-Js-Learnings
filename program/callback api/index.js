import * as fs  from "fs";
fs.mkdir("c:\\newfolder",(error)=>{
    if(error) 
        throw error;
    console.log("Directory Created...");
});