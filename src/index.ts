import Game from './classes/game'

let currentGame: Game

const username = document.getElementById('username')
const token = document.getElementById('token')
const startButton = document.getElementById('start-game')
const startForm = document.getElementById('start-form')
const mainGame = document.getElementById('main-game')
const boxes = document.getElementsByClassName('ttt-box')

function addEventListeners() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
      boxes[i].innerHTML = `<h1>${currentGame.currentPlayer.token}</h1>`
      currentGame.addScore(i)
      console.log(`Your score is ${currentGame.currentPlayer.score}`)
      currentGame.changeTurn()
    })
  }
}
addEventListeners()

startButton?.addEventListener("click", (event) => {
  event.preventDefault()
  initializeGame(username.value, token.value)
  hideOrShow(startForm)
  hideOrShow(mainGame)
  // startGame()
})

function initializeGame(username: string, token: string): void {
  currentGame = new Game(token, username)
}

function hideOrShow(element?: HTMLElement): void {
  element?.classList.contains('hidden') ? element.classList.remove("hidden") : element?.classList.add("hidden")
}

function computerTurn(): void {

  if (currentGame.currentPlayer.name === 'Computer') {
    const random: number = Math.floor(Math.random() * 9)
    console.log(random)
    boxes[random].innerHTML = currentGame.currentPlayer.token
  }
}

function startGame() {
  while (!currentGame.checkForWin()) {

  }

}