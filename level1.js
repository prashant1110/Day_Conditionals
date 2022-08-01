//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age=prompt("enter the age :");

if(age>=18){
    alert("You are old enough to drive");
}else{
    alert("you are left with "+ (18-age )+" year to drive.")
}


//2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge=21;
let yourAge=prompt("enter your age :");

if(yourAge>myAge){
    console.log("You are "+(yourAge-myAge)+" years older then me.");
}else{
    console.log("you are younger than me.")
}

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//1.using if else
 let a=8;
 let b=10;

 if(a>b){
    console.log("a is greater than b.");
 }else{
    console.log("a is smaller than b.");
 }

 //2.ternary operator
let c=10;
let d=5;

(c>d)
?console.log("c is greater than d")
:console.log("c is smaller than d.")

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num1=prompt("enter the number :");

if(num1%2==0){
    console.log(num1 +" is an even number");
}else{
    console.log(num1 +" is an odd number");
}