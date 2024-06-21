// let arr=[
    
//     {
//         marks:65,
//         subject:"Math", 
//     },

// {
//     subject:"laplapalap",
//     marks:100,

// },
// ];

// arr.forEach((student) =>  {
//     console.log(student.marks);

// });
// let arry=[2,7,1,4,6,5,9,4,5,];
// let max=0;
// for (let index = 0; index <= arry.length; index++) {
//     if (max<arry[index]) {
//         max=arry[index];
        
//     }
//     console.log(max);
    
// }


// multiple of 10   use of every in js

// let arry=[10, 20, 30 ,50];
//  let nums=arry.every((el)  =>  el%10==0);
//  console.log(nums);



// use of reduse instend of reduse we write min or max
  
// let arry=[10, 20, 30 ,50];

// let min=arry.min((min,el)  =>  {
//     if (min<el) {
//         return min;
//      } else
//         {
//             return le;
//         }
        
//     }
// )
//        destructure

const student={
    name:"karan",
    age:19,
    class: "1st year",
    subject:["hindi","english","math"],
    userman:"karan123",
    password:"abcd",

};
let  { userman: user, password:sceert, city="mumbai"   }=student