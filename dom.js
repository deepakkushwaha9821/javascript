// let btn=document.querySelector("button");
// console.dir(btn);

// btn.oneclick=function(){
//     console.log("button was clicked");
// }
// btn.oneclick=function(){
//          alert("button was clicked");
//      }
// let btn=document.querySelectorAll("button");


// for(btn of btns)
// { btn.onclick=sayname
//     btn.onclick=sayhello;
// }
// function sayhello(){
//     alert("hello!");
// }
// function sayname(){
//         alert("apna collaeg!");
//     }
// 02.event listeren
let btn=document.querySelectorAll("button");


for(btn of btns){
    btn.addEventlistener("click","sayhello");
    btn.addEventlistener("click","sayanme");

// btn.onclick=sayname;
//     btn.onclick=sayhello;
}
function sayhello(){
    alert("hello!");
}
function sayname(){
    alert("apna collaeg!");
}
