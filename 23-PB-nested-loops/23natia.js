

for (let i = 10; i > 0; i--) {
   
    let myString = ' ';
    for (let k = 0; k <= (i / 2)-1; k++) { 
        myString += '*';
    }
    for (let j = 1; j < (i*2)-1; j++) { 
        myString += ' ';
    }
   
   
    console.log(myString);
}


//

for(let i = 1; i <= 10; i++) { // outer loop
   
    let myString = '';
    for (let k = 10; k > i; k--) { // nested loop // inner loop
        myString += ' ';
    }
    for (let j = 0; j < (i*2)-1; j++) { // nested loop // inner loop
        myString += '*';
    }
    for (let l = 10; l > i; l--) { // nested loop // inner loop
        myString += ' ';
    }

    console.log(myString);
}


//

for(i=1;i<=10;i++){
  space = " ";
  for(j=i;j<10;j++){
    space += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    space += "*";
  }
  console.log(space);
} 
