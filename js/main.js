const btnStart = document.querySelector(".btnStart");
const gameStart = document.querySelector(".game_start");
const gameContent = document.querySelector(".game_content");

btnStart.addEventListener("click",()=>{
    gameStart.classList.add("active");
    gameContent.style.display = "flex";
})