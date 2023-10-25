const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let resultIcon = null;

choiceBtns.forEach((button) => button.addEventListener("click", handleChoice));

function handleChoice(event) {
  const playerChoice = event.target.textContent.trim();
  const computerChoice = getComputerChoice();
  switch (playerChoice.trim()) {
    case "Paper":
      resultIcon = "./images/paper.png";
      break;
    case "Rock":
      resultIcon = "./images/rock.png";
      break;
    case "Scissors":
      resultIcon = "./images/scissors.png";
      break;
    default:
      resultIcon = "";
      break;
  }
  switch (computerChoice) {
    case "Paper":
      resultIconComp = "./images/paper.png";
      break;
    case "Rock":
      resultIconComp = "./images/rock.png";
      break;
    case "Scissors":
      resultIconComp = "./images/scissors.png";
      break;
    default:
      resultIconComp = "";
      break;
  }

  player.src = resultIcon;
  computer.src = resultIconComp;

  const resultWinner = checkWinner(playerChoice, computerChoice);
  result.innerHTML = resultWinner;
  console.log(result.innerHTML);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}
