// 1

// const path = require("node:path");
// function currentPath(){
//     console.log({File:__filename, Dir:__dirname});

// }
// currentPath();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2

// const path = require("node:path");
// const file = "/user/files/report.pdf" ;

// function fileName(filename){
//     return path.basename(filename);
// }

// console.log(fileName(file));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3

// const path = require("node:path");
// const obj = { dir: "/folder", name: "app", ext: ".js"};

// function formatPath(obj){
//     return path.format(obj);
// }

// console.log(formatPath(obj));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4

// const path = require("node:path");
// const file = "/docs/readme.md";

// function extension(file){
//     return path.extname(file);
// }

// console.log(extension(file));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5 

// const path = require("node:path");
// const file = "/home/app/main.js";

// function parseFile(file){
//    return {Name:path.parse(file).name , Ext:path.parse(file).ext} ;
// }

// console.log(parseFile(file));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6 

// const path = require("node:path");
// const file = "/home/user/file.txt";

// function checkabs(file){
//     return path.isAbsolute(file);
// }

// console.log(checkabs(file));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7

// const path = require("node:path");
// let src = "src";
// let comp = "components";
// let ext = "app.js"

// function join(...segements){
//     return path.join(...segements);
// }

// console.log(join(src,comp,ext));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8 

// const path = require("node:path");
// let relative = "./index.js";

// function resolvePath(abspath ,rel){
//     return path.resolve(abspath , rel);
// }

// console.log(resolvePath(__dirname, relative));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9 

// const path = require("node:path");
// let path1 = "/folder1";
// let path2 = "folder2/file.txt"

// function join(p1,p2){
//     return path.join(p1,p2);
// }

// console.log(join(path1,path2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10

// const fs = require("node:fs");
// const path = require("node:path");


// function deleteAsync(filePath){
//     const filename = path.basename(filePath);
//     fs.unlink(filePath , (error)=>{
//         if(error)
//             console.log(error);
//         else
//             console.log(`The ${filename} is deleted`);
            
            
//     })
       
// }
// deleteAsync("./delete.txt");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11

// const fs = require("node:fs");
// const path = require("node:path");

// function createFolderSync(folderPath) {
//   try {
//     fs.mkdirSync(folderPath);
//     console.log("Success");
//   } catch (error) {
//     console.log("failed");
//   }
// }

// const folder = path.join(__dirname, "newFolder");
// createFolderSync(folder);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12

// const {EventEmitter} = require("node:events");
// const event = new EventEmitter();

// event.emit("start", console.log("Welcome event triggered!"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13

// const {EventEmitter} = require("node:events");
// const event = new EventEmitter();
// const username = "Ahmed";

// event.on("login", (username)=>{
//     console.log(`User logged in: ${username}`);
    
// })

// event.emit("login", username);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14 

// const fs = require("node:fs");

// function readFile(filePath) {
//   try {
//     const data = fs.readFileSync(filePath); 
//     console.log(`the file content => "${data}"`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile("./notes.txt");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 15

// const { error } = require("node:console");
// const fs = require("node:fs");

// function writeFile(filePath , content) {
 
//      fs.writeFile(filePath , content , (error)=>{
//         if(error)
//             console.log(error);
//      }); 
    
// }

// writeFile("./aysnc.txt" , "aysnc save");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 16

// const fs = require("node:fs");

// function checkDirectory(path) {
//     const exists = fs.existsSync(path); 
//     return exists;
// }

// console.log(checkDirectory("./notes.txt"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 17

// const os = require("node:os");

// function MyComp(){

//     return {Platorm:os.platform(), Arch:os.arch()}
// }

// console.log(MyComp());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
