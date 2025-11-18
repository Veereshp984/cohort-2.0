
let main = document.querySelector('main');
let btn = document.querySelector('button');

const quotes = [
    "Keep going.",
    "Stay positive.",
    "Trust the process.",
    "Dream big.",
    "Be yourself.",
    "Stay humble.",
    "Choose happiness.",
    "One step at a time.",
    "Believe in yourself.",
    "You got this.",
    "Stay curious.",
    "Never give up.",
    "Do your best.",
    "Make it happen.",
    "Enjoy the moment.",
    "Take the risk.",
    "Stay focused.",
    "Prove them wrong.",
    "Be kind.",
    "Stay strong."
];

btn.addEventListener("click",()=>{
//     let div = document.createElement("div");
//     div.style.height = "80px";
//     div.style.width = "80px";
  
//     let x = Math.random()*100;
//     let y = Math.random()*100;
//     let c1 = Math.floor(Math.random()*255);
//     let c2 = Math.floor(Math.random()*255);
//     let c3 = Math.floor(Math.random()*255);
//     let r = Math.random()*100;
//   div.style.top = y + "%";
//   div.style.left = x + "%";
//     div.style.backgroundColor = `rgb(${c1},${ c2} ,${ c3})`;
//     div.style.position = "absolute"
//     div.style.rotate = r + "deg";
//     console.log(div)

//     main.appendChild(div)
    let x = Math.random()*100;
    let y = Math.random()*100;
   let scl = Math.random()*3;
   let r = Math.random()*360;
let h1 = document.createElement("h1");
var a = Math.floor(Math.random()*quotes.length);
h1.innerHTML = quotes[a];
h1.style.position = "absolute";
 h1.style.left = x + "%";
h1.style.top = y + "%";
h1.style.scale = scl 
h1.style.rotate = r + "deg";
main.appendChild(h1);



// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// const Timer = (str)=>{
//     console.log(str ,"hitesh",Date.now());
// }


// // clearInterval(intervalId)
// let intervalId;
// start.addEventListener("click",()=>{
//     intervalId = setInterval(Timer,1000,"hi")
// });
// stop.addEventListener("click",()=>{
//     clearInterval(intervalId);
// })



// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// const Timer = (str)=>{
//     console.log(str ,"hitesh",Date.now());
// }


// // clearInterval(intervalId)
// let intervalId;
// start.addEventListener("click",()=>{
//     intervalId = setInterval(Timer,1000,"hi")
// });
// stop.addEventListener("click",()=>{
//     clearInterval(intervalId);
// })






})