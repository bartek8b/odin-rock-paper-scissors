function getComputerchoice(){
    let computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice");
    humanChoice = humanChoice.toLowerCase()
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
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
    else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("draw!");
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
    else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("draw!");
    }
}



function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerchoice();
    playRound(humanSelection, computerSelection);
    console.log(`The core is: ${humanScore} : ${computerScore}`)
}

// playGame();