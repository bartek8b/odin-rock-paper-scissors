function getComputerchoice(){
    let compChoice = Math.floor(Math.random() * 3);

    if(compChoice === 1){
        console.log("rock") ;
    }
    else if (compChoice === 2){
        console.log("paper");
    }
    else{
        console.log("scissors");
    }
}