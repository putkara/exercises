for (let i = 1; i <= 30; i++) {
	let game = '';
	if (i % 3 === 0) game += 'Fizz';
  	if (i % 5 === 0) game+= 'Buzz';
  
  console.log(game || i);
}



  

let space = "";

for(i=1;i<=10;i++){
  space = "";
  for(j=i;j<10;j++){
    space += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    space += "*";
  }
  console.log(space);
}