const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score-head");
const startBtn = document.querySelector(".start-btn");
const playBtn = document.querySelector(".play-btn");
let moles = document.querySelectorAll(".mole");
let bonkMole = document.querySelectorAll(".mole-bonk");
let timer = document.getElementById('timer')
let game = document.getElementById('game')
let container = document.getElementById('container')

let lastHole;
let timeUp = false;
let score = 0;
let timerTime = 10

playBtn.addEventListener('click', ()=>{
    game.style.display = 'flex'
    container.style.display = 'none'
})

console.log(moles);

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  //   console.log(hole);
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  const idx = Math.floor(Math.random() * holes.length);
  moles[idx].classList.add("up");
  setTimeout(() => {
    moles[idx].classList.remove("up");
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  timerTime = 10
  peep();
  setTimeout(() => (timeUp = true), 10000);
  let mukul = setInterval(() => {
      if(timerTime < 1){
            startBtn.textContent = "PLAY AGAIN"
            clearInterval(mukul)
          console.log('stop')
      } else {
          countdown();
      }
  }, 1000);
}


function countdown(){
    timerTime--
    timer.textContent = "00:"+ "0"+timerTime;
}

function bonk(e) {
//   if (!e.isTrusted) return; // cheater!
  score++;
//   this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
  console.log("hello");
}

bonkMole.forEach((mole) => mole.addEventListener("click", bonk));
