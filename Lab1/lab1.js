const questionOne = function questionOne(arr) {
    let sum = 0;
    for (let x of arr){
        if(typeof x != 'number') throw " Not a number!";
       if(x === undefined) throw " Undefined input!";
        let num = x;
        num = num * num;
         sum = sum + num;
    }

    return sum;
        
}
// test console.log(questionOne([2,4,5])); // testing the result. returning true

const questionTwo = function questionTwo(num) { 

    if(num <= 1){
        return num;
    }
    else
     {return questionTwo(num-1) + questionTwo(num-2);}

    
    // Implement question 2 here
}
 
// test console.log(questionTwo(8)); // Working 


const questionThree = function questionThree(text) {
    let count = 0 ;
    for (let x of text){
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x =='O' || x =='U' ) 
        { 
            count++;
        }
    } return count;
    // count returns the total number of vowels in the text
}
//let test = 'aeidfgklou'
// test console.log(questionThree(test));

const questionFour = function questionFour(num) {
   
    
    if (num < 0){
        return NaN;
    }
 else if(num == 0 ){
     return 1;

 }
    
    else {
       
        num = num * questionFour(num-1)
       return num;
        
    }
    
}
//test console.log(questionFour(5));


module.exports = {
    firstName: "Rajit", 
    lastName: "Gohel", 
    studentId: "10455405",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};