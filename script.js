function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    };
}

let win = "You Win!";
let lose = "You Lose!";

function playRound(ps, cs) {//playerSelection computerSelection
    let msg;

    switch (true) {
        case (ps == cs):
            msg = "Tie";
            break;
        case (ps == "rock" && cs == "paper"):
            msg = `${lose} ${cs} beats ${ps}`;
            break;
        case (ps == "rock" && cs == "scissors"):
            msg = `${win} ${ps} beats ${cs}`;
            break;
        case (ps == "paper" && cs == "rock"):
            msg = `${win} ${ps} beats ${cs}`;
            break;
        case (ps == "paper" && cs == "scissors"):
            msg = `${lose} ${cs} beats ${ps}`;
            break;
        case (ps == "scissors" && cs == "paper"):
            msg = `${win} ${ps} beats ${cs}`;
            break;
        case (ps == "scissors" && cs == "rock"):
            msg = `${lose} ${cs} beats ${ps}`;
    }
    return msg;
}

function game(playerSelection) {
    let msg = playRound(playerSelection, getComputerChoice());;
    message.textContent = msg;
    if ("You W" === msg.substring(0, 5)) {
        playerScore++;
    } else if ("You L" === msg.substring(0, 5)) {
        compScore++;
    }
    score.textContent = `Score: player ${playerScore} - computer ${compScore}`
    if (playerScore == 5) {
        score.textContent = `Game over! You Won! Score: player ${playerScore} - computer ${compScore}`
        playerScore = 0;
        compScore = 0
    } else if (compScore == 5) {
        score.textContent = `Game over! You Lost! Score: player ${playerScore} - computer ${compScore}`
        playerScore = 0;
        compScore = 0
    }
}

let answer;

const message = document.querySelector("p#message");
const score = document.querySelector("p#score");
let playerScore = 0;
let compScore = 0;



const div = document.querySelector("div");
div.addEventListener('click', e => {
    game(e.target.alt);
});

