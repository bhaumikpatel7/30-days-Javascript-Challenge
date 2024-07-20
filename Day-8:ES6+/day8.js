//task-1

const name = "Tony";
const age = 20;

console.log(`the name of the person is ${name} and his age is ${age}`);

//task-2
console.log(`the name of the person is ${name} 
and his age is ${age}`);

//task-3
const numbers = [1, 2, 3, 4, 5];

const [first,second] = numbers;
console.log(first);
console.log(second);

//task-4
let book = {
    title:"Harry Porter",
    author:"JK",
    year:2024
}
const {title,author,year} = book;
console.log(title);
console.log(author);
console.log(year);

//task-5


const combined = [...numbers,6,7,8,9];
console.log(combined);

//task -6
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
  
console.log(sum(1, 2, 3));       
console.log(sum(1, 2, 3, 4, 5)); 


//task-7
function sum(a,b=1){
    return a*1;
}
  
console.log(sum(6));;

//task-8
// Variables for properties
const Fname = 'Tony';
const age1 = 30;
const job = 'Developer';

// Define the object using enhanced object literals
const person = {
  // Shorthand for properties
  Fname,
  age1,
  job,
  
  // Method shorthand
  greet() {
    console.log(`Hello, my name is ${this.Fname}.`);
  }
}
console.log(person.Fname);
console.log(person.age1);
console.log(person.job);
console.log(person);
person.greet();

//task-9
const property1 = "title";
const property2 = "author";
const property3 = "year";

const book3 = {
    [property1]:"HP 3",
    [property2]:"JK 3",
    [property3]:1999,

    getFullName() {
        return `the name of the book is ${book3.title} and author is ${book3.author}`;
      }
}

console.log(book3.title);
console.log(book3.author);
console.log(book3.year);
console.log(book3.getFullName());
