let todo=[];
let req=prompt("please enter your request");
while (true) {
    if (rer=="quite")
     { console.log("you are quiting the appp");
        break;
    }
    if (req=="list") {
        console.log("-------");
       for (let i  = 0; i <=todo.length; i ++) {
        console.log(i,todo[1]);
        
       }
        
        console.log(-----------);
    }
    else if (req=="add") {
        let task= prompt("please entwn what you want to add");
        todo.puch(task);
        console.log(task);
        if (req=="delete") {
            let indx=prompt("please enter the indie");
            todo.splice(indx,1);
            console.log("task deleted");
            
        } 
        
    } else {
        console.log("wrong word");
    }
    let req=prompt("please enter your request");
}