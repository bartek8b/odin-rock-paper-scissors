function getComputerchoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 0){
        return "rock";
    }
    else if (computerChoice === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playGame(humanSelection){
    playRound(humanSelection, getComputerchoice()); 
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("draw!");
        }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You loose! Paper beats rock!");
        computerScore ++;
     }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats paper!");
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Ppaer beats rock!");
        humanScore ++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You loose! Scissors beats paper!");
        computerScore ++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You loose! Rock beats scissors!");
        computerScore ++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
        humanScore ++;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");

humanScoreBoard.textContent = humanScore;
computerScoreBoard.textContent = computerScore;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", (e) => {
    playGame("rock");
})

paperBtn.addEventListener("click", (e) => {
    playGame("paper");
})

scissorsBtn.addEventListener("click", (e) => {
    playGame("scissors");
})



    // if (roundCounter <= 5){
    //     playGame();      
    // }
    // else{
    //     roundCounter = 1;
    //     console.log(`-------- FINAL RESULT: ${humanScore} : ${computerScore} --------`);
    //     if(humanScore > computerScore){
    //         console.log("Congrats! You won!");
    //     }
    //     else if (humanScore < computerScore){
    //         console.log("Try next time! This time computer won!");
    //     } 
    //     else{
    //         console.log("It's draw");
    //     }
    // }
