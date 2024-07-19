//task-1
for(let n=1;n<=10;n++){
    console.log(n);
}

//task-2

for(let i = 1;i<=10;i++){
    console.log("5 "+"* "+i+" = "+ 5*i);
}

//task-3
let sum=0;
let n=10;
while(n){
    
     sum = n + sum;
    n--;

}
console.log(sum);

//task-4
let num =10;
while(num){
    console.log(num);
    num--;
}
//task-7
for(let i=0;i<5;i++){
    let stars=""
    for(let j=0;j<i;j++){

        stars+="*"
    }
    console.log(stars)
}

//task-8
for(let i=1;i<=10;i++){

    if(i==5){
        continue;
    }
    console.log(i)
}
//task-9

for(let i=1;i<=10;i++){

    if(i==7){
        break;
    }
    console.log(i)
}