let randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(randomNumber);
function game() {
   let guessedNumber = parseInt(prompt("guess my number"));
    for (let guess = 1; guess <= 4; guess++)
    if (randomNumber === guessedNumber) {

        alert("Won Game" +
            guess + " GUESS ");
            break;
    } else if (guess < 3 && randomNumber !== guessedNumber) {
        guess++;
        prompt("Wrong Answer");
    } else {
        guess++;
        alert("Lost Game")
    }
}
game();