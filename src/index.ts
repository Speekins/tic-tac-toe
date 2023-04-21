import Game from './classes/game'

let currentGame: Game

const username: HTMLElement | null = document.getElementById('username')
const token = document.getElementById('token')
const startButton = document.getElementById('start-game')
const startForm: HTMLElement | null = document.getElementById('start-form')
const mainGame = document.getElementById('main-game')
const boxes = document.getElementsByClassName('ttt-box')

function addEventListeners() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (event) => {
      const id = event.target.id
      currentGame.addScore(id)
      console.log(`Your score is ${currentGame.currentPlayer.score}`)
      boxes[i].innerHTML = `<h1>${currentGame.gameBoard[id]}</h1>`
      currentGame.checkForWin()
    })
  }
}
addEventListeners()

startButton?.addEventListener("click", (event) => {
  event.preventDefault()
  initializeGame(username.value, token.value)
  hideOrShow(startForm)
  hideOrShow(mainGame)
  startGame()
})

function initializeGame(username: string, token: string): void {
  currentGame = new Game(token, username)
}

function hideOrShow(element?: HTMLElement): void {
  element?.classList.contains('hidden') ? element.classList.remove("hidden") : element?.classList.add("hidden")
}

function startGame() {
  let count = 0
  while (currentGame.winner === '') {
    if (count === 4) {
      currentGame.winner = 'Spencer'
    }
    if (currentGame.currentPlayer.name === "Computer") {
      currentGame.computerTurn()
    }
    count += 1
  }

  console.log("GAME OVER!")
}