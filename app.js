let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score"); // Fixed ID reference
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🎉`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    if (computerScore_span) {
        computerScore_span.innerHTML = computerScore; // Ensure it's not null
    } else {
        console.error("Element with ID 'computer-score' not found!");
    }
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose! 😢`;
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw! 🤝`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}, Computer: ${computerChoice}`);

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    });
    paper_div.addEventListener("click", function () {
        game("p");
    });
    scissor_div.addEventListener("click", function () {
        game("s");
    });
}

// Ensure the script runs only after the DOM is fully loaded
window.onload = function () {
    main();
};
