const SCISSORS= "SCISSORS";
const ROCK = "ROCK";
const PAPER = "PAPER";
const OPTIONS = [SCISSORS, ROCK, PAPER];
let computerChoice, playerChoice;

function play(playerChoice) {
    do {
        computerChoice = getRandomOption();
    }while (computerChoice === "undefined");
    changeAiChoiceDisplay(computerChoice);
    console.log(computerChoice);
    document.getElementById("message").innerHTML = calculateResult(computerChoice, playerChoice);
    document.getElementById("newGameButton").style.display = "inline";
}

function getRandomNumberFromTo(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomOption(){
    let optionIndex = getRandomNumberFromTo(0,3);
    return OPTIONS[optionIndex];
}

function getOptionToBeat(choice){
    switch (choice) {
        case SCISSORS:
            return PAPER;
        case ROCK:
            return SCISSORS;
        case PAPER:
            return ROCK;
        default:
            return null;
    }
}

function getOptionToLoseTo(choice){
    switch (choice) {
        case SCISSORS:
            return ROCK;
        case ROCK:
            return PAPER;
        case PAPER:
            return SCISSORS;
        default:
            return null;
    }
}

function changeAiChoiceDisplay(choice){
    let element;
    switch (choice) {
        case SCISSORS:
            element = document.getElementById("ai-scissors");
            element.src = "/images/scissors.jpg";
            document.getElementById("ai-rock").src = "/images/empty.png";
            document.getElementById("ai-paper").src = "/images/empty.png";
            break;
        case ROCK:
            element = document.getElementById("ai-rock");
            element.src = "./images/rock.jpg";
            document.getElementById("ai-scissors").src = "/images/empty.png";
            document.getElementById("ai-paper").src = "/images/empty.png";
            break;
        case PAPER:
            element = document.getElementById("ai-paper");
            element.src = "/images/paper.jpg";
            document.getElementById("ai-rock").src = "/images/empty.png";
            document.getElementById("ai-scissors").src = "/images/empty.png";
            break
        default:
            break;
    }
}
function calculateResult(aiChoice, userChoice){
    if(aiChoice === getOptionToBeat(userChoice.toUpperCase())){
        playerChoice = null;
        return "You won! " + userChoice + " beats " + aiChoice + "! ";
    } else if (aiChoice === getOptionToLoseTo(userChoice.toUpperCase())) {
        playerChoice = null;
        return "You lost! "  + aiChoice + " beats " + userChoice + "! "
    } else {
        playerChoice = null;
        return "Draw. How exciting."
    }
}
