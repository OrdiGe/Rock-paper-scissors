let rockJavascript = document.getElementById("rock");
let paperJavascript = document.getElementById("paper");
let scissorsJavascript = document.getElementById("scissors");
let pScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".buttons");    
const computerChoices = ["Rock", "Paper", "Scissors"];

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
playerScore.textContent = pScore;
computerScore.textContent = cScore;
    
function rock() {  

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Rock";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "YOU WON!";
        pScore++;
        document.getElementById("playerScore").innerHTML = pScore;
    }
    else if(computerChoice == "Paper") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
        cScore++
        document.getElementById("computerScore").innerHTML = cScore;
    }
    else if(computerChoice == "Rock") {
        document.getElementById("winlose").innerHTML = "DRAW!"
    }
};
    
function paper() {   

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Paper";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Rock") {
        document.getElementById("winlose").innerHTML = "YOU WON!";
        pScore++;
        document.getElementById("playerScore").innerHTML = pScore;
    }
    else if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
        cScore++
        document.getElementById("computerScore").innerHTML = cScore;
    }
    else if(computerChoice == "Paper") {
        document.getElementById("winlose").innerHTML = "DRAW!"
    }
}    

function scissors() {

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Scissors";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Paper") {
        document.getElementById("winlose").innerHTML = "YOU WON!";
        pScore++;
        document.getElementById("playerScore").innerHTML = pScore;
    }
    else if(computerChoice == "Rock") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
        cScore++
        document.getElementById("computerScore").innerHTML = cScore;
    }
    else if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "DRAW!"
    }
}