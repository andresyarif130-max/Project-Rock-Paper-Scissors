// Step 2 pseudocode 
 // Create new function getComputerChoice.
 // Create 1 var inside it with Math.floor & Math.random
 // Create if... else statement for rock, paper, scissors

// Step 2
function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

// Step 3 pseudocode
 // Create a function getHumanChoice.
 // Get input from user to pick rock, paper & scissors.
 // Test the code.

 //Step 3
 function getHumanChoice (){
    const humanChoice = prompt("please choose one:\n rock, paper or scissors");
 }

 console.log(getHumanChoice());

 // Step 4 pseudocode
  // Create variable to keep tract on player score.
  // Create variable to keep tract on computer score.
  // Start the variable value from 0.