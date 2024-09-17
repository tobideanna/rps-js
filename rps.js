console.log("JavaScript is linked!");

let humanScore = 0;
let computerScore = 0;
const buttons = document.getElementById("buttons");

const scores = document.getElementById("scores");
const dynamicScore1 = document.createElement("p");
dynamicScore1.textContent = "Human Score: 0";
scores.appendChild(dynamicScore1); 

const dynamicScore2 = document.createElement("p");
dynamicScore2.textContent = "Computer Score: 0";
scores.appendChild(dynamicScore2);

const dynamicResult = document.createElement("p");
dynamicResult.textContent = "";
dynamicResult.style.fontWeight = "bold";
scores.appendChild(dynamicResult);

const dynamicWinner = document.createElement("p");
dynamicWinner.textContent = "";
scores.appendChild(dynamicWinner);

function getComputerChoice (){
    let computerChoice = Math.floor(Math.random () * 3);
    if (computerChoice === 0){
        computerChoice = "rock";
        } else if (computerChoice === 1){
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        
    console.log(computerChoice);
    return computerChoice;
}

function playRound(humanChoice){
        let computerChoice = getComputerChoice();
        if (humanChoice === computerChoice){
            console.log("It's a tie!");
            dynamicResult.textContent = "It's a tie!";
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                   (humanChoice === "paper" && computerChoice === "scissors") ||
                   (humanChoice === "scissors" && computerChoice === "rock")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            dynamicResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                   (humanChoice === "paper" && computerChoice === "rock") ||
                   (humanChoice === "scissors" && computerChoice === "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            dynamicResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } 
        dynamicScore1.textContent = `Human Score: ${humanScore}`;
        dynamicScore2.textContent = `Computer Score: ${computerScore}`;

        if (humanScore === 5){
            
        dynamicWinner.textContent = "You win the game!";
        } else if (computerScore === 5){
            dynamicWinner.textContent = "You lose the game!";
        } else {
            dynamicWinner.textContent = "";
        }
        dynamicWinner.style.fontWeight = "bold";
        dynamicWinner.style.color = "green";
        dynamicWinner.style.textDecoration = "underline";

}
buttons.addEventListener("click", (e) => {
    console.log(e.target.id);
    playRound(e.target.id);
});