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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice");
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice === "rock" || humanChoice ==="paper" || humanChoice === "scissors"){
        return humanChoice;
    }
    else{
        console.log("Invalid input");
        // roundCounter = roundCounter;
    }
    
}

let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("Round: " + roundCounter);
        console.log("draw!");
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("Round: " + roundCounter);
        console.log("You loose! Paper beats rock!");
        computerScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Round: " + roundCounter);
        console.log("You win! Rock beats paper!");
        humanScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Round: " + roundCounter);
        console.log("You win! Ppaer beats rock!");
        humanScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "paper" && computerChoice === "paper"){
        console.log("Round: " + roundCounter);
        console.log("draw!");
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Round: " + roundCounter);
        console.log("You loose! Scissors beats paper!");
        computerScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Round: " + roundCounter);
        console.log("You loose! Rock beats scissors!");
        computerScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Round: " + roundCounter);
        console.log("You win! Scissors beats paper!");
        humanScore ++;
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Round: " + roundCounter);
        console.log("draw!");
        console.log(`The score is ${humanScore} : ${computerScore}`);
        roundCounter++; 
    }
}

function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerchoice();
    playRound(humanSelection, computerSelection); 

    if (roundCounter <= 5){
        playGame();      
    }
    else{
        roundCounter = 1;
        console.log(`-------- FINAL RESULT: ${humanScore} : ${computerScore} --------`);
        if(humanScore > computerScore){
            console.log("Congrats! You won!");
        }
        else if (humanScore < computerScore){
            console.log("Try next time! This time computer won!");
        } 
        else{
            console.log("It's draw");
        }
    }
}