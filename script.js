function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let answer;
    switch (number){
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

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection;
    let msg;
    switch (true) {
        case (ps==cs):
            msg = "Error";
            break;
        case (ps == "rock" && cs == "paper"):
            msg = "You Lose! Paper beats Rock";
            break;
        case (ps == "rock" && cs == "scissors"):
            msg = "You Win! Rock beats Scissors";
            break;
        case (ps == "paper" && cs == "rock"):
            msg = "You Win! Paper beats Rock";
            break;
        case (ps == "paper" && cs == "scissors"):
            msg = "You Lose! Scissors beats Paper";
            break;
        case (ps == "scissors" && cs == "paper"):
            msg = "You Win! Scissors beats Paper";
            break;
        case (ps == "scissors" && cs == "rock"):
            msg = "You Lose! Rock beats Scissors";
    }
    return msg;
}

let playerSelection ;
let computerSelection ;
let answer;



function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        answer = playRound(playerSelection, getComputerChoice());
        if(answer == "Error"){
            console.log("Tie");
            i--;
        }else{
            console.log(answer);
        }
        
    }
}
game()