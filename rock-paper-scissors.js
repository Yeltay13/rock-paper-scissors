const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
};

const playRound = (computerSelection, playerSelection) => {
  const games = 5;
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < games; i++) {
    computerSelection = computerPlay();
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    if (playerSelection === computerSelection) {
      console.log("Tie");
    } else if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        computerPoints++;
        console.log("Computer Won");
      } else {
        playerPoints++;
        console.log("Player Won");
      }
    } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        computerPoints++;
        console.log("Computer Won");
      } else {
        playerPoints++;
        console.log("Player Won");
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        computerPoints++;
        console.log("Computer Won");
      } else {
        playerPoints++;
        console.log("Player Won");
      }
    }
  }
  if (playerPoints > computerPoints) {
    console.log(
      "Congratulations!  You beat the computer " +
        playerPoints +
        " to " +
        computerPoints
    );
  } else {
    console.log(
      "Sorry!  You lost to the computer " +
        computerPoints +
        " to " +
        playerPoints
    );
  }
};
console.log(playRound());
