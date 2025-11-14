// question 1
// let age =  prompt("enter age:");

// if(age === null){
//     console.error("you cancelled it ");
// }else{
//     if(age.trim() === ""){
//     console.error("cholo bari anna!!!")
// }else{
//     age = Number(age.trim());
//     if(isNaN(age)){
//         console.error("anna number bari roo")
//     }else{
//        if(age >=18){
//         console.log("you are eligible to vote")
//        }else{
//         console.log("not eligible")
//        }
//     }
// }
// }

// #question 2

// for(let i =1;i<=50;i++){
//     if(i % 5 ===0){
//         console.log(`5 x ${i} = ${i}`);
//     }
// }

// question 3
// let count = 0
// for(let i =1;i<=15;i++ ){
//     if(i > 8){
//         count++;
//     }
// }
// console.log(count)

// question 4
// let input = prompt("enter passowrd");
// let password = "password";
// if(input === null){
//     console.error("please enter the passoword")
// }else{
//     if(input.trim().length === 0){
//         console.error("please enter the password")
//     }else if(input === password){
//          console.log("access allowed")
//     }else{
//         console.log("access denied ")
//     }
// }

// question 5
// let attempt = 3;
//  let password = "password";
//  let accessGranted = false;
// if(attempt === 0){
//     console.log("account locked")
// }else{
//     while (attempt > 0) {
//   let input = prompt("enter password");
//   if (input === null) {
//     console.error("please enter the passoword");
//   } else {
//     if (input.trim().length === 0) {
//       console.error("please enter the password");
//     } else if (input === password) {
//       console.log("access allowed");
//       accessGranted = true;
//       break;
//     } else {
//       console.log("access denied ");
//     }
//   }
//   attempt --;
// }

// }
// if(!(accessGranted)){
//     console.log("access denied")
// }

// let attempts  =0;
// let flag = false;
// let pass = "veeru";
// let password = prompt("enter passowrd");
// attempts++;

// if(password === pass){
//   flag = true;
// }
// while(password !== pass){
//   if(attempts === 3){
//     console.log("account locked")
//     break;
//   }
//    password = prompt("enter passowrd");
//    if(password === pass){
//     flag = true;
//    }
//   attempts++;
// }

// if(flag === true){
//   console.log("account opened")
// }

// question 12
// let count = 0;

// while (true) {
//   let word = prompt("enter the word: ");
//   if (word.trim().length === 0) {
//     console.log("enter the word");

//   }

//   let cleanWord = word.trim().toLowerCase();
//   if (cleanWord === "stop") {
//     break;
//   }
//   if (cleanWord === "yes") {
//     count++;
//   }
// }

// console.log(`you typed yes ${count} times`);

// let count = 0;

// let input = prompt("enter the words")
// let flag = false;

// if(input === "stop"){
//   flag = true;
// }
// while(input !== "word"){
//   let input = prompt("enter the words")
//   if(input === "yes"){
//     count++;
//   }
//   if(input === "stop"){
//     flag = true;
//   }
// }
// if(input === "stop"){
//   console.log("programe stopped.")
// }
// console.log(``)

// let attempt =0;
// let pass ="veeru";
// let passowrd = prompt("enter passow0rd");
// attempt++;

// while(attempt < 3 && pass !== passowrd){
//    passowrd = prompt("enter passow0rd");
//   attempt++;
// }

// if(attempt === 3 && pass !== passowrd){
//   console.log("account locked");

// }else{
//   console.log("done")
// }

// question no 12

// let word = prompt("word bolo");
// let counter =0;
// while(word !== "stop"){
//   if(word ==="yes"){
//     counter++;
//   }
//   word = prompt("word bolo");

// }

// console.log(`total times yes count ${counter}`)

// question no 13

// for(let i =1;i<=50;i++){
//   if(i % 7===0){
//     console.log(i)
//   }
// }

//question no 14
// let sum =0;
// for(let i =1;i<=30;i++){
//   if(i % 2 !== 0){
//    sum = sum +i;
//   }
// }
// console.log(sum)

//question no 15
// let input = +prompt("enter number :")
// while(input % 2 !==0){
//   input = +prompt("enter number :")
// }
// if(input % 2===0){
//     console.log("entered even number ")
//   }

//question no 16

// question no 17
// let start = +prompt("enter start number:");
// let end = +prompt("enter end number:")
// if(start > end){
//   console.error("start cannot be bigger than end")
// }
// for(let i = start;i<= end;i++){
//   console.log(i);
// }

// question no 18
// let counter = 0;
// for(let i =1;i<=20;i++){
//   if(counter ===3){
//     break;
//   }
//   if(1% 2 !== 0){
//     console.log(i);
//     counter++;
//   }
// }

//question no 19
// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.


// let counter = 0;
// for(let i =1;i<6;i++){
//   let num = +prompt("number do:");
//   if(num>= 0){
//     counter++;
//   }
// }
// console.log(counter);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000;
// let flag = false;

// let counter = 0;
// while(balance >0 && counter !==3){
//   let withdraw = +prompt("kitne paise withdraw karna hai");
//   counter++;
//   if(withdraw <= balance){
//     balance -=withdraw;
//     console.log(balance)
//   }else{
//     flag = true;
//     break;
//   }
// }
// if(flag === true){
//   console.log("insufficient balance");
// }


