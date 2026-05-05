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

  //Step 4
  const humanScore = 0;
  const computerScore = 0;
  
  //Step 5 pseudocode
   // Create function playRound
   // Add two parameter(humanChoice and computerChoice) in function PlayRound
   // Convert humanChoice to lowercase.
   // If both choice are same, print "Do it again".
   // If Human wins ((rock beats scissors, paper beats rock, scissors beats paper):
      // Increase humanScore by 1.
      // Print "You win this round".)
   // Else:
      // Increase cumanScore by 1.
      // Print "You lose this round".

  //Step 5
  function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        return "Do it again";
    }
    
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
    ) {
        humanChoice++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    } else {
        computerChoice++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
  }  

  // Step 6 pseudocode
   // Create funcion named playGame
   // Repeat 5 times:
      // Get human choice.
      // Get computer choice.
      // Call playRound function.
  // Print final scores.
  // If humanScore is greater:
      // Print "You win the game".
  // Else if computerScore is greater:
      // Print "Computer wins the game".
  // Else:
      // Print "The game is a tie".

    