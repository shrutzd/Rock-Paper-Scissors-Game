let randomNum;
function getComputerChoice(){
    randomNum = Math.floor(Math.random()*3);
    return randomNum;
}

let computerChoiceValue = getComputerChoice();

if(computerChoiceValue==0){
    randomNum = "rock";
    console.log("Computer choice: ",randomNum);
}
else if(computerChoiceValue==1){
    randomNum = "paper";
    console.log("Computer choice: ",randomNum);
}else{
    randomNum = "scissor";
    console.log("Computer choice: ",randomNum);
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
let humanChoice = getHumanChoice();
console.log("Your choice: ",humanChoice);

humanChoice = humanChoice.toLowerCase();
let humanChoiceValue = choiceMap[humanChoice];

let HumanScore = 0, ComputerScore =0;

function playRound(human,computer){
    if(human==computer){
        console.log("It's a tie!");
    }else{
        if(human==1 && computer==3){
            console.log(`You win!`);
        }
        else if(human<computer){
            console.log(`You lose!`);
        }
    }
}

playRound(humanChoiceValue,computerChoiceValue);