let rockJavascript = document.getElementById("rock")
let paperJavascript = document.getElementById("paper")
let scissorsJavascript = document.getElementById("scissors")

rockJavascript.addEventListener("click", rockFunction)
paperJavascript.addEventListener("click", paperFunction)
scissorsJavascript.addEventListener("click", scissorsFunction)

function rockFunction() {
    document.getElementById("rpsText").innerHTML = "Rock";
}

function paperFunction() {
    document.getElementById("rpsText").innerHTML = "Paper";
}

function scissorsFunction() {
    document.getElementById("rpsText").innerHTML = "Scissors";
}