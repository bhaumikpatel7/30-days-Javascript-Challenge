//task-1
function oddEven(n){
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
oddEven(3);
//task-2
function square(n){
    return console.log(n*n);
}
square(4);

//task-3
function maxi(a,b){
  
    if(a>b){
        console.log("A is bigger than B");
    }else{
        console.log("B is bigger than A");
    }
}
let a=10;
let b = 20;
maxi(a,b);

//task-4
function concatString(firstName,lastName){
    console.log(firstName+lastName);
}
let firstName = "Tony ";
let lastName = "Stark";
concatString(firstName,lastName)

//task-5
let c=22;
let d=11
const sum = (c,d)=> c+d;

console.log(sum(5,6))

//task-6

containStr = (str,char) => str.includes(char);
str = "Bhaumik";
char = "c";
const result = containStr(str,char);
console.log(result);

//task-7

function prod(a,b=5){
    console.log(a*5);
}
prod(5);

//task-8

function greetings(name,age=19){
    console.log(`Hello ${name}, Good morning.your age is ${age}`);
}
greetings("Tony")

//task-9
function low(){
    console.log("Call me");
}

function high(low,num){
    
  for(let i=0;i<num;i++){
    low();
  }
}

high(low,5);