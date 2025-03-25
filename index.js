let humanScore = 0;
let computerScore = 0;

const humanScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");

humanScoreBoard.textContent = humanScore;
computerScoreBoard.textContent = computerScore;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const computerShot = document.querySelector("#computer-shot");

const commentary = document.querySelector("#commentary");

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
    computerShot.textContent = `Computer: ${computerChoice}`;

    if (humanChoice === computerChoice){
        commentary.textContent = "Draw";
        commentary.style.color = "black"
        }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        commentary.textContent = "You loose";
        commentary.style.color = "tomato"
;       computerScore ++;
        computerScoreBoard.textContent = computerScore;
     }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        commentary.textContent = "You win";
        commentary.style.color = "green";
        humanScore ++;
        humanScoreBoard.textContent = humanScore;
    }

    

    if(humanScore === 5 || computerScore === 5){
        humanScore = 0;
        computerScore = 0;

        humanScoreBoard.textContent = humanScore;
        computerScoreBoard.textContent = computerScore;
        commentary.textContent += " for the 5th time!";
    }
}


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
