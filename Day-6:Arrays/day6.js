//task-1
a = [1,2,3,4,5];
console.log(a);

//task-2
console.log(a[0]);
console.log(a[4]);

//task-3
a.push(6);
console.log(a);

//task-4
a.pop();
console.log(a);

//task-5
a.shift(0);
console.log(a);

//task-6
a.unshift(1);
console.log(a);

//task-7
const double = a.map(num => num*2);
console.log(double);

//task-8
const even = a.filter(num => num%2==0);
console.log(even);

//task-9

const sum = a.reduce((sum,a)=>(sum = sum+a))
console.log(sum);

//task-10

for(i=0;i<a.length;i++){
    console.log(a[i]);
}


//task-11
a.forEach(element => {
    console.log(element);
});

//task-12
b = [[1,2,3],[4,5,6]]
console.log(b);
//task-13
console.log(b[1][1]);