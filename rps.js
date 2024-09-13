console.log("JavaScript is linked!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let computerChoice = Math.floor(Math.random () * 3);
    if (computerChoice === 0){
        computerChoice = "Rock";
        } else if (computerChoice === 1){
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }
        
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? R, P or S");
    let humanUpper = humanChoice.toUpperCase();
    if (humanUpper === "R") {
        humanUpper = "Rock";
    } else if (humanUpper === "P") {
        humanUpper = "Paper";
    } else if (humanUpper === "S") {
        humanUpper = "Scissors";
    }
    console.log(humanUpper);
    return humanUpper;
}

function playRound(){
    let computerScore = 0;
    let humanScore = 0;
    while (humanScore < 3 && computerScore < 3){
        let humanUpper = getHumanChoice();
        let computerChoice = getComputerChoice();
        if (humanUpper === computerChoice){
            console.log("It's a tie!")
        } else if ((humanUpper === "Rock" && computerChoice === "Paper") ||
                   (humanUpper === "Paper" && computerChoice === "Scissors") ||
                   (humanUpper === "Scissors" && computerChoice === "Rock")){
            console.log(`You lose! ${computerChoice} beats ${humanUpper}`)
            computerScore += 1;
        } else if ((humanUpper === "Rock" && computerChoice === "Scissors") ||
                   (humanUpper === "Paper" && computerChoice === "Rock") ||
                   (humanUpper === "Scissors" && computerChoice === "Paper")){
            console.log(`You win! ${humanUpper} beats ${computerChoice}`)
            humanScore += 1;
        } else {
            console.log("Invalid input. Please enter R, P, or S.")
        } 
        
        console.log(`Human score: ${humanScore}\nComputer score: ${computerScore}`);
    }
    if (humanScore > computerScore){
        console.log("You win the game!")
    } else {
        console.log("You lose the game!")
    }
}

playRound();