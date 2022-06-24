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
    document.getElementById("newGameButton").style.display = "block";
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
    let element = document.getElementById("ai-paper");
    element.style.transitionDuration = "0.5s";
    element.style.transform = "rotatey(180deg)";

    let placeholderOne = document.getElementById("ai-rock");
    placeholderOne.style.transform = "rotatey(180deg)";
    placeholderOne.style.transitionDuration = "0.5s";


    placeholderOne.src = "/images/empty.png";
    let placeholderTwo = document.getElementById("ai-scissors");
    placeholderTwo.style.transitionDuration = "0.5s";
    placeholderTwo.style.transform = "rotatey(180deg)";

    placeholderTwo.src = "/images/empty.png";
    switch (choice) {
        case SCISSORS:
            element.src = "/images/scissors.jpg";
            break;
        case ROCK:
            element.src = "/images/rock.jpg";
            break;
        case PAPER:
            element.src = "/images/paper.jpg";

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
