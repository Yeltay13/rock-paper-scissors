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

const computerSelection = computerPlay();

const game = (computerSelection, playerSelection) => {
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

console.log(game(computerSelection, "rock"));
