//day-3

//task-1
n=3;
if(n>=0){
  console.log("Positive")
}
else{
  console.log("Negative")
}
//task-2
age = 23;

if(age>=18){
  console.log("eligible to vote")
}
else{
  console.log("not eligible to vote")
}

//task-3
a=20;
b=30;
c=40;
if(a>b && a<c){
  console.log("A is the largest number")
}
else if(b>a && b>c){
  console.log("B is the largest number")
}
else{
  console.log("C is the largest number")
}

//task-4
s=4;
switch (s){
  case 1:console.log("Sunday");
    break;
  case 2:console.log("Monday");
    break;
  case 3:console.log("Tuesday");
    break;
  case 4:console.log("Wednesday");
    break;
  case 5:console.log("Thursday");
    break;
  case 6:console.log("Friday");
    break;
  case 7:console.log("Saturday");
    break;
  default:console.log("Write a new number")

}

//task-5

score = 96

  switch (true) {
    case (score >= 90):
      console.log("A");
      break;
    case (score >= 80):
       console.log("B");
      break;
    case (score >= 70):
       console.log("C");
      break;
    case (score >= 60):
       console.log("D");
      break;
    default:
       console.log("F");
  }
//task-6
num=21;
num%2==0?console.log("Even"):console.log("Odd");

//task-7
leapYear = 2004;
if(leapYear%4==0){
  if(leapYear%100==0){
    if(leapYear%400==0){
      console.log("Leap Year");
    }
    else{
      console.log("Not a leap Year")
    }
  }
  else{
    console.log("leap Year")
    }
  
}else{
  console.log("Not a leap Year");
}



