//let fs = require("fs"); 
let bluebird = require("bluebird");

let pth = require('path');
let Promise = bluebird.Promise;

//const prompt = bluebird.promisifyAll(require("prompt"));
let fs = bluebird.promisifyAll(require("fs"));
// code taken from class code shared by professor on Github for the students reference
// https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_03/code/async-await/app.js

async function getFileAsString(path) {
    if (!path) throw "You have given a wrong path";
    
        let fileContent = await readfile(path);
       
    return fileContent;
    
    
}


async function readfile(path) {

  let data = fs.readFileSync(path, 'utf8')
  return data;


}

let text = 'I am at Starbucks'
async function appendfile(path,text) {
    
         fs.appendFileSync(path, 'data to append');
     
     let dataread = fs.readFileSync(path, 'utf8')
     //console.log(dataread); 
     return true;
      
    
    }


// (async () => {
//    await getFileAsString("C:\\WP\\Labs\\Lab3\\new.txt")
//   })();
 //////////////////////////////////
 
 async function getFileAsJSON(path) {
    if (!path) throw "You have given a wrong path";
    
        let fileContent2 = await readfile(path);
        //console.log(fileContent1);
        let obj1 = JSON.parse(fileContent2);
        return obj1;
        //console.log(obj);
       
    
    
   
 }
//  (async () => {
//     await getFileAsJSON("C:\\WP\\Labs\\Lab3\\JSONso.txt")
//    })();
////////////////////////////////////////////////////////////////

async function saveStringToFile(path, text){
    if (!path) throw "You have given a wrong path";
    
        let fileContent2 = await appendfile(path,text);
        //console.log(fileContent1);
       
        //console.log(fileContent2);

       
    
    
    

}

// (async () => {
//     await saveStringToFile("C:\\WP\\Labs\\Lab3\\Append.txt")
//    })();


/// ///////////////////////////////////////////////////

let obj = {type:"Fiat", model:"500", color:"white"};
    async function jsonToString(path,obj) {
    
         fs.writeFileSync(path,JSON.stringify(obj));
     
     //let dataread = fs.readFileSync(path, 'utf8')
     //console.log(dataread); 
     return true;
      
    
    }

    async function saveJSONToFile(path, obj){
        
            let fileContent2 = await jsonToString(path,obj);
            return fileContent2;
            //console.log(fileContent1);
           
            //console.log(fileContent2);
    
           
        
        

}
// (async () => {
//     await saveJSONToFile("C:\\WP\\Labs\\Lab3\\jsontostring.txt",obj)
//    })(); 

///////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    saveJSONToFile,jsonToString, getFileAsJSON, getFileAsString

}







