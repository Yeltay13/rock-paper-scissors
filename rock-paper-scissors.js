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
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Computer Won";
    } else {
      return "Player Won";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "Computer Won";
    } else {
      return "Player Won";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "Computer Won";
    } else {
      return "Player Won";
    }
  }
};

const game = () => {
  const games = 6;
  let playerPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < games; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    function computerPlay() {
      return ["paper", "scissors", "rock"][(Math.random() * 3) | 0];
    }
    let computerSelection = computerPlay();

    let round = playRound(playerSelection, computerSelection);
    if (round === "Player Won") {
      playerPoints++;
      console.log("You Win");
    } else if (round === "Computer Won") {
      computerPoints++;
      console.log("You Lose");
    } else if (round === "ties") {
      console.log("tied");
    }
  }

  if (playerPoints > computerPoints) {
    console.log("");
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
}; // end game();
console.log(game());
