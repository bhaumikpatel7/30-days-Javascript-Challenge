//task:1
var num = 1;

//task-2
let name = "Bhaumik";

//task-3
const booleanNumber = true;
console.log(booleanNumber);

//task-4
let number = 1;
let str = "Bhaumik"
let bool = false
let arr = [1,2,3,4,5];
let obj1 = {number:1,numb:2}

console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(arr));
console.log(typeof(obj1));


//task-5


function newNumberWithLet(){
    let num1=2222;
    console.log("before num1 = "+ num1);
    num1 = 2000;
    console.log("after reassignment num1 = "+ num1);
}

newNumberWithLet()

//task-6

function newNumberWithConst(){
    const num2=2222;
    console.log("before num1 = "+ num2);
    num2 = 2000;
    console.log("after reassignment num1 = "+ num2);
    //TypeError TypeError: Assignment to constant variable.
}

//newNumberWithConst()