let chosenNumbers = [];

const gameStart = document.querySelector(".game_start");
const gameContent = document.querySelector(".game_content");
const endGame = document.querySelector(".game_end");

const btnStart = document.querySelector(".btnStart");
const btnGuess = document.querySelector(".btn_chute");
const btnsRestart = document.querySelectorAll('.btn_reiniciar');

const messageContainer = document.querySelector(".message_warning");
let guess = document.querySelector("input");
const message = document.querySelector(".message");

let limitNumber = 100;
let secretNumber = getRandomNumber();
let attempts = 1;

btnStart.addEventListener("click", () => startButton());
btnGuess.addEventListener("click", ()=> guessButton());

btnsRestart.forEach(btn => {
    btn.addEventListener('click', () => restartGame());
})


function startButton(){
    gameStart.classList.add("active");
    gameContent.style.display = "flex";
}

function guessButton(){
    const guessValue = guess.value;

    if (guessValue == secretNumber) {
        endGame.style.display = "flex";
        gameContent.style.display = "none";
        checkAttempts();
    } else if (guessValue < secretNumber) {
        warningMessage('maior');
        displayMessage('bigger','smaller');
    } else {
        warningMessage('menor');
        messageContainer.classList.add('smaller');
        messageContainer.classList.remove('bigger');
        displayMessage('smaller','bigger');
    }
    attempts ++;
    resetInput();
}


function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * limitNumber + 1);

    if (chosenNumbers.length == limitNumber) {
        chosenNumbers = [];
    }

    if (chosenNumbers.includes(randomNumber)) {
        console.log('there is a same number');
        return getRandomNumber();
    } else {
        chosenNumbers.push(randomNumber);
        return randomNumber;
    }
}


function warningMessage(text) {
    messageContainer.style.display = "flex";
    message.innerHTML = `O número é ${text.toUpperCase()}`;

}

function resetInput() {
    guess.value = "";
}

function restartGame() {
    resetInput();
    gameStart.classList.remove('active');
    endGame.style.display = "none";
    secretNumber = getRandomNumber();
    messageContainer.style.display = "none";
    attempts = 1;

}

function checkAttempts() {
    const messageAttempt = document.querySelector(".attempts");
    
    let attemptWord = attempts > 1 ? 'tentativas': 'tentativa';

    messageAttempt.innerHTML = `apenas ${attempts} ${attemptWord}`;

}
function displayMessage(addClass, removeClass){
    messageContainer.classList.add(addClass);
    messageContainer.classList.remove(removeClass);   
}