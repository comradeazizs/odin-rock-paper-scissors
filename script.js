function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let answer;
    switch (number) {
        case 0:
            answer = "rock";
            break;
        case 1:
            answer = "paper";
            break;
        case 2:
            answer = "scissors";
            break;
    };
    return answer;
}
let win = "You Win!";
let lose = "You Lose!";

function playRound(ps, cs) {//playerSelection ComputerSelection
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

let answer;

const message = document.querySelector("p#message");
const score = document.querySelector("p#score");
let playerScore = 0;
let compScore = 0;

function game(playerSelection) {
    // console.log(playRound(playerSelection, getComputerChoice()));
    let msg =  playRound(playerSelection, getComputerChoice());;
    message.textContent = msg;
    if ("You W" === msg.substring(0,5)){
        playerScore++;
    } else if ("You L" === msg.substring(0,5)) {
        compScore++;
    }
    score.textContent = `${playerScore} - ${compScore}`
}


const div = document.querySelector("div");
div.addEventListener('click', e => {
    game(e.target.alt);
});
