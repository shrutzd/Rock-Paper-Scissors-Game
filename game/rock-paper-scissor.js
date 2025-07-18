function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return randomNum;
}

let CompChoice = getComputerChoice();

if(CompChoice==1){
    console.log("Rock");
}
else if(CompChoice==2){
    console.log("Paper");
}else{
    console.log("Scissors");
}