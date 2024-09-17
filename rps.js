console.log("JavaScript is linked!");

let humanScore = 0;
let computerScore = 0;
const buttons = document.getElementById("buttons");

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
buttons.addEventListener("click", (e) => {
    console.log(e.target.id);
    playRound(e.target.id);
});

function playRound(humanChoice){
        let computerChoice = getComputerChoice();
        if (humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
                   (humanChoice === "paper" && computerChoice === "scissors") ||
                   (humanChoice === "scissors" && computerChoice === "rock")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                   (humanChoice === "paper" && computerChoice === "rock") ||
                   (humanChoice === "scissors" && computerChoice === "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } 
        console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}
