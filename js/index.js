const endGame = document.querySelector(".game_end");
const btnGuess = document.querySelector(".btn_chute");
const btnsRestart = document.querySelectorAll('.btn_reiniciar');
const messageContainer = document.querySelector(".message_warning");
let guess = document.querySelector("input");
const message = document.querySelector(".message");

const limitNumber = 10;
const randomNumber =  getRandomNumber(); // working in the random number

console.log(randomNumber);

btnGuess.addEventListener("click",()=>{ 
    const guessValue = guess.value;
    
    if(guessValue == randomNumber){
        console.log("you right");
        endGame.style.display ="flex";
        gameContent.style.display = "none";
    }else if(guessValue < randomNumber){
        console.log("the number is bigger");
        warningMessage('maior')
    }else{
        console.log("the number is lower");
        warningMessage('menor')
    }
    resetInput();
})

btnsRestart.forEach(btn=>{
    btn.addEventListener('click',() => restartGame());
})

function getRandomNumber(){
    const getNumber = parseInt(Math.random() * limitNumber + 1)
}

function warningMessage(text){
    messageContainer.style.display = "flex";
    message.innerHTML = `O número é ${text.toUpperCase()}`;
    messageContainer.classList.toggle('active');
}

function resetInput(){
    guess.value = "";
}

function restartGame(){
    resetInput();
    gameStart.classList.remove('active');  
    endGame.style.display ="none";
}