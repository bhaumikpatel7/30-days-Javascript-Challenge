//task-1

let book = {
    "name":"Harry Porter",
    "author":"JK",
    "year":2024
}
let book1 = {
    "name":"Harry Porter 2",
    "author":"JK 2",
    "year":2028
}
console.log(book);

//task-2
console.log(book.name);
console.log(book.author);

//task-3
function task3(){
    return `the name of the book is ${book.name} and the name publish year is ${book.year}`
}

console.log(task3());

//task-4
function updateYear(year){
    book.year = year;
   
}
updateYear(2022);
console.log(book);

//task-5
let library = {
    name:"WPL",
    books:[book,book1]
}
console.log(library);

//task-6
library.books.forEach((book) => {
    console.log(book.name);
    
});

//task-7
book.getDetails = function (){
    return  `Book name is ${this.name} and  written by ${this.author} in  ${this.year} year`
}
console.log(book.getDetails());


//task-8
for (const param in book) {
  console.log(param);
  console.log(book[param]);
}
//task-9
console.log(Object.keys(book));
console.log(Object.values(book));