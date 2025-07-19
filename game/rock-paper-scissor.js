let randomNum;
function getComputerChoice(){
    randomNum = Math.floor(Math.random()*3);
    return randomNum;
}

function getHumanChoice(){
    let HumanChoice = prompt("Rock! Paper! Scissor!");
    return HumanChoice;
}
let choiceMap = {
    rock: 0,
    paper: 1,
    scissor:2
};


let HumanScore = 0, ComputerScore =0;

function playRound(human,computer){
    if(human==computer){
        console.log("It's a tie!");
    }else{
        if(human===0 && computer===2 ||
            human===1 && computer ===0 ||
            human ===2 && computer ===1
        ){
            console.log(`You win!`);
            HumanScore++;
        }
        else if(human<computer){
            console.log(`You lose!`);
            ComputerScore++;
        }
    }
}

function playGame(){
    for(let round=1; round<=5; round++){
        let computerChoiceValue = getComputerChoice();

        if(computerChoiceValue==0){
        console.log("Computer choice: rock");
    }
        else if(computerChoiceValue==1){
        console.log("Computer choice: paper");
    }else{
    console.log("Computer choice: scissor");
    }

    let humanChoice = getHumanChoice();
    console.log("Your choice: ",humanChoice);

    humanChoice = humanChoice.toLowerCase();
    let humanChoiceValue = choiceMap[humanChoice];

    playRound(humanChoiceValue,computerChoiceValue);
    }
    if(HumanScore>ComputerScore){
        console.log("You win this round!");
    }
    else if(HumanScore===ComputerScore){
        console.log("This round is a tie!");
    }else{
        console.log("You lose this round!");
    }
}

playGame();