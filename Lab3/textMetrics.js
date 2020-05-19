function checkIfSrting(val, variablename) {
    if (val === undefined) throw `${variablename} you have entered undefined`;
    if (typeof val !== 'string') throw `${variablename} is not a string`;
    //if (val < 0) throw "you have entered a negative value";
    //if (typeof str === 'string') throw "The input is a string";

}




// let text = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";
//let text = 123
function createMetrics(text){
    checkIfSrting(text,text);
    
    text.trim();
    let obj = { totalLetters : 0,
    totalNonLetters : 0,
    totalVowels: 0,
    totalConsonants : 0,
    totalWords : 0,
    uniqueWords : 0,
    longWords: 0,
    averageWordLength : 0,
    wordOccurrences: 0};
    
    let count = 0;
   
    let lotext = text.toLowerCase();
    
    for(let x in lotext){
        let val = lotext.charCodeAt(x);
        //console.log(val);

       
        if(val >= 97 && val <= 122){
           count = obj.totalLetters; //Object.values(obj[totalLetters]);
           //++count;
           obj.totalLetters = ++count;

        
        } else {
            count = obj.totalNonLetters;
            //++count;
            obj.totalNonLetters = ++count;
        } 
    } // END OF FOR LOOP 1
            

        
        for(let y in lotext){
            if(lotext.charAt(y) == 'a' || lotext.charAt(y) == 'e' || lotext.charAt(y) == 'i' || lotext.charAt(y) == 'o' || lotext.charAt(y) == 'u'){
                count = obj.totalVowels;
           // ++count;
            obj.totalVowels = ++count;
            } // END OF IF LOOP

        } // END OF FOR LOOP 2
    
     let consonants = obj.totalLetters - obj.totalVowels;
     obj.totalConsonants = consonants;
     ////////////////////////////////////////////////////////// DEEP CODE///////////////////////////////////////////
    //     let min=97;
    //     let max=122;
    //    let c= lotext.split("");
    //    let flag=0;
    //    let count1=0;
    //    for(let i=0;i<c.length;i++){
    //        //console.log(c[i]);
    //     if(c[i].charCodeAt(0)>=min && c[i].charCodeAt(0)<=max && flag==1){
    //         count1++;
    //        // console.log("loop 1");
    //         flag=0;
    //     }
    //     if(c[i].charCodeAt(0)>=min && c[i].charCodeAt(0)<=122){
    //         //console.log("loop 2");
    //         if(i==c.length-1){
    //             count1++;
    //         }
    //     }
    //     if(c[i].charCodeAt(0)>122 || c[i].charCodeAt(0)<97){
    //         //console.log("loop 3");
    //         flag=1;
    //         if(i==c.length-1){
    //             count1++;
    //         }
    //     }
        
    //    }
      
    //    obj.totalWords= count1;


       ////////////////////////////////////// DEEP CODE ///////////////////
    
        let str = lotext.split("-").join(" ");
     let strcomma = str.split(",").join(" ");
     let strperiod = strcomma.split(".").join(" ");
     let strexclamation = strperiod.split("!").join(" ");
    //  console.log(strexclamation);
    //  console.log(strexclamation.split(" ").length);
     strexclamation = strexclamation.replace(/\d+/g," " );
    //  console.log(strexclamation);
    //  console.log(strexclamation.length);
     strexclamation = strexclamation.replace(/(\r\n|\n|\r)/gm, " ");
     
     strexclamation =strexclamation.replace(/[^a-zA-Z ]/g, "");
     strexclamation =strexclamation.replace(/[^a-zA-Z0-9]/g, '');
     
     

     strexclamation = strexclamation.split(" ");
     let content = strexclamation.toString().replace(/\t/g, ' ').split('\r\n');
    //  console.log("length of content"+ content.length);
    //  console.log(content);
     content = content.toString();
     for(let i=0; i<content.length;i++){
         if(content[i]== ","){
             content = content.replace(",", " ");
         }
     }
     content = content.replace(/\s\s+/g, ' ');
     content = content.trim();
     content = content.split(" ");
     //content = content.replace(","," ");
     //console.log(content); // PERFECT STRING WITHOUT ANYTHING !!!!!!
     obj.totalWords = content.length;

     let unicontent = new Set(content);
     obj.uniqueWords=unicontent.size;

     for(let i in content){
            if(content[i].length>=6){
                obj.longWords++;
            }
          }
     //console.log(content);
     let sum =0;
     for(let i in content){
         sum = sum +content[i].length;

      } obj.averageWordLength = sum/content.length;

      let map = {};
      for(let i in content){
          let checkifexists = content[i];
        if (checkifexists in map) {
            map[checkifexists] = ++map[checkifexists]
        }
        else {
            map[checkifexists] = 1
        }
      } obj.wordOccurrences = map;



     
     //content = content.replace(/\s+/g,' ').trim();
    //  let constring = content.toString();
    //  constring = constring.replace(/\s+/g,' ').trim();
    //  console.log(constring);
     //let art = [];

    
     
     
    //  for(let z of content){
    //      console.log(z);
    //      if(content[z] != ""){
    //         art[z] = content[z];
    //      }
         
    //  } 
    //  console.log("This is art");
    //  console.log(art);
    //  let op = strexclamation.split(" ");
    //  op= op.replace(/(\r\n|\n|\r)/gm, "");
    //  console.log(op);

    //  //let strr = str.split("\n");
    //  let str2 = str.split(" ");//str
    //  let str2len = str.split(" ").length;
    //  obj.totalWords = str2len; // End of total words
    //  console.log(str);
    //  console.log(str2);
     //console.log(str2len);
    //  let str3 = [];
    // //  console.log(str2.length);
    // //  console.log(str3.length);
    
    //   for(let u=0; u <= str2.length; u++){
    //       if(str3.includes(str2[u])){

    //       } else {
    //           str3.push(str2[u]);

    //       }
          
    //   } // end of forloop 2
    //   str3.pop(); // removes undefined
    //   //console.log(str3.length);
    //   obj.uniqueWords = str3.length;
      
      ///longer thsn 6
    //   for(let i in str2){
    //     if(str2[i].length>6){
    //         obj.longWords++;
    //     }
    //   }

       
    
     
     
     //console.log(obj);
     return obj;

    
    } //END OF THE FUNCTION
 

// createMetrics(text);

module.exports = {
    createMetrics

}


