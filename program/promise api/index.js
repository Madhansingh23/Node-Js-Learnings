import * as fs from "fs/promises";
try{
    await fs.mkdir("C:\movies",{recursive:true});// create directory
await fs.mkdir("C:\movies\\redux\\toolkit",{recursive:true});// create directory and folder
    console.log("Folder Created......");
}catch(error)
{
    console.log(error);
}

import * as fs from "fs/promises";
try{
    // const files=await fs.readdir("c:\movies");// to read files
    // for(const file of files){
    //     console.log(file);
    // }  
    // await  fs.rmdir("C:\movies\\redux\\toolkit");// to remove directory
    // await fs.writeFile('READ.md','Hello Madhan ');// to create a md file with msgg in iit
    // await fs.writeFile('requirements.txt','HelloNodejs');// to create a txt file with this meassage
    // const data=await fs.readFile("READ.md","utf-8");// to rEAD DATA
    // console.log(data);
    // await fs.appendFile("READ.md","Nodejs is easy but life sucks");//appends in file
    // await fs.copyFile('READ.md','info.txt');//creates info .txt and copy it
    // const info =await fs.stat("info.txt");// to view the status of the file
    // console.log(info);
    // console.log(info.isDirectory());// says is directory or not true/false
    // console.log(info.isFile());//saya it is file or not boolean
}catch(error)
{
    console.log(error);
}

