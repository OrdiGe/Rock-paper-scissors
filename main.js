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
        alert("You won!");
    }
    else if(computerChoice == "Paper") {
        alert("You lost...")
    }
    else if(computerChoice == "Rock") {
        alert("Same as computer!")
    }
};
    
function paper() {   

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Paper";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Rock") {
        alert("You won!");
    }
    else if(computerChoice == "Scissors") {
        alert("You lost...")
    }
    else if(computerChoice == "Paper") {
        alert("Same as computer!")
    }
}    

function scissors() {

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerChoices[computerNumber];

    document.getElementById("rpsText").innerHTML = "Scissors";
    document.getElementById("compText").innerHTML = computerChoice;

    if(computerChoice == "Paper") {
        alert("You won!");
    }
    else if(computerChoice == "Rock") {
        alert("You lost...")
    }
    else if(computerChoice == "Scissors") {
        alert("Same as computer!")
    }
}