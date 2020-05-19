const fd = require('./fileData.js')
const tm = require('./textMetrics.js')
let fs = require("fs");


async function onefile(path){

    
    if(fs.existsSync('./chapter1.result.json')){
        try{
        let print = await fd.getFileAsJSON('./chapter1.result.json');
        console.log(print);
    }
    catch(e){
        console.log(e);
    }

    } else{
        try{
            let strfile = await fd.getFileAsString(path);
       
            //console.log(tm.createMetrics(strfile));
            //fd.saveJSONToFile("chapter1.result.json",storeobj)
            let storeobj = tm.createMetrics(strfile);
           fd.saveJSONToFile("./chapter1.result.json",storeobj);
           let toPrint = await fd.getFileAsJSON("./chapter1.result.json");
           console.log(toPrint);

            
            
        }
        catch(e){
            console.log(e)
        }
  

    }
}
try{
(async () => {
    await onefile("./chapter1.txt");
   })(); }
   catch(e){
       console.log(e);
   };
   

// //onefile("C:\\WP\\Labs\\Lab3\\chapter1.txt");



async function twofile(path){

    
    if(fs.existsSync('./chapter2.result.json')){
        try{
        let print = await fd.getFileAsJSON('./chapter2.result.json');
        console.log(print);
    }
    catch(e){
        console.log(e);
    }

    } else{
        try{
            let str1file = await fd.getFileAsString(path);
       
            //console.log(tm.createMetrics(strfile));
            //fd.saveJSONToFile("chapter1.result.json",storeobj)
            let storeobj1 = tm.createMetrics(str1file);
           fd.saveJSONToFile("./chapter2.result.json",storeobj1);
           let toPrint1 = await fd.getFileAsJSON("./chapter2.result.json");
           console.log(toPrint1);

            
            
        }
        catch(e){
            console.log(e)
        }
  

    }
}
try{
(async () => {
    await twofile("./chapter2.txt");
   })(); }
   catch(e){
       console.log(e);
   };

   ////////////////////////////////////////////////////////////
   async function threefile(path){

    
    if(fs.existsSync('./chapter3.result.json')){
        try{
        let print = await fd.getFileAsJSON('./chapter3.result.json');
        console.log(print);
    }
    catch(e){
        console.log(e);
    }

    } else{
        try{
            let strfile3 = await fd.getFileAsString(path);
       
            //console.log(tm.createMetrics(strfile));
            //fd.saveJSONToFile("chapter1.result.json",storeobj)
            let storeobj3 = tm.createMetrics(strfile3);
           fd.saveJSONToFile("./chapter3.result.json",storeobj3);
           let toPrint3 = await fd.getFileAsJSON("./chapter3.result.json");
           console.log(toPrint3);

            
            
        }
        catch(e){
            console.log(e)
        }
  

    }
}
try{
(async () => {
    await threefile("./chapter3.txt");
   })(); }
   catch(e){
       console.log(e);
   };