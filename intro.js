
var mathLib = require('./myMath')

var evens = []; //put all even numbers

//print from 1 to 10 except for 3 and 7
function exc1(){
    for(let i=1; i<= 10; i++){
        if(i !=3 && i != 7){
            console.log(i);

        }
    }
}

//will put even numbers inside of the array
function exc2(howMany){

    for(let i=0; i< (howMany *2); i++){
        if(mathLib.isEven(i)){
            console.log('even: '+ i );
            evens.push(i);
        } 
    }
}



// exc1();
// exc2(2);

// console.log(mathLib.sum(21,21))

//each example is given two examples for a true and false of the functions and the greater than or less than number in both position 1 and 2
console.log(mathLib.isEven(12))
// console.log(mathLib.isEven(11))
console.log(mathLib.isOdd(12))
// console.log(mathLib.isOdd(11))
console.log(mathLib.greater(19,22))
// console.log(mathLib.greater(22,19))
console.log(mathLib.less(22,19))
// console.log(mathLib.less(19,22))





