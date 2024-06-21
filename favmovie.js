//const favMovie="avatar";
//let guess=prompt("guress my favorit movie");
//while ((guess!=favMovie) && (guess!="quite")) {
  //  guess=prompt("wrong guess.please try again");
//}
//if(guess== favMovie){
  //  console.log("congrats"); 
//}
// let i=1;
// while (i<=5) {
// if (i==3) {
//     break;
// }console.log(i);
//     i++;
// }


// let fruit=["apple", "mango","bananan","pineapple"];
// for (let i =0; i<fruit.length; i++  ){
//     console.log(i,fruit[i]);
// }


// revese
// for (let i = fruit.length-1; i >= 0; i--) {
    
//     console.log(i,fruit[i]);
// }


//loop with nested array
 let heroes=[["spiderman","iron man","captain america"],["batman","wonder woman","flash"]];
 for (let  i= 0; i <=heroes.length; i++) {
  console.log([i],heroes[i],heroes[1].length);
  for (let j = 0; j <= heroes[i].length; j++) {
    console.log(`j=${j} ,${heroes[i][j]} `);
    
  }
  
  
 }