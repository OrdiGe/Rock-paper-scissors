let rockJavascript = document.getElementById("rock");
let paperJavascript = document.getElementById("paper");
let scissorsJavascript = document.getElementById("scissors");

    const choices = document.querySelectorAll(".buttons");    
    const computerChoices = ["Rock", "Paper", "Scissors"];
    
function rock() {  

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Rock";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "YOU WON!";
    }
    else if(computerChoice == "Paper") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
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
    }
    else if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
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
    }
    else if(computerChoice == "Rock") {
        document.getElementById("winlose").innerHTML = "YOU LOST..."
    }
    else if(computerChoice == "Scissors") {
        document.getElementById("winlose").innerHTML = "DRAW!"
    }
}