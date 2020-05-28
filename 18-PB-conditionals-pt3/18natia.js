

//Aleeza's team
let aTeamA = 89;
let aTeamB = 120;
let aTeamC = 103;

//Lis's team
let lTeamA = 116;
let lTeamB = 94;
let lTeamC = 123;

// 1
let aleezaAll =(aTeamA + aTeamB + aTeamC) / 3;
let lAll =(lTeamA + lTeamB + lTeamC) / 3;
console.log(aleezaAll);
console.log(lAll);


if (aleezaAll > lAll){
    console.log(`Aleeza's team`);
} else if (aleezaAll < lAll) {
    console.log(`Lis's team`);
}



let mTeamA = 97;
let mTeamB = 134;
let mTeamC = 105;

let mAll =(mTeamA + mTeamB + mTeamC) / 3;
console.log(mAll);




if (aleezaAll > mAll && aleezaAll > lAll) {
    console.log(`Alleza's team `);
  } else if (mAll > aleezaAll && mAll > lAll) {
    console.log(`Marys's team`);
  } else if (lAll > mAll && lAll > aleezaAll) {
    console.log(`Lis's team `);
  } else {
    console.log("that is a draw");
  } 


  
  



    