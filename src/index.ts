import Game from './classes/game'

let currentGame: Game

const username = document.getElementById('username')
const token = document.getElementById('token')
const startButton = document.getElementById('start-game')
const startForm = document.getElementById('start-form')

startButton?.addEventListener("click", (event) => {
  event.preventDefault()
  initializeGame(username.value, token.value)
  hide(startForm)
  console.log(`Welcome, ${currentGame.players[0].name}!`)
  console.log(`The token you have chosen to play with is ${currentGame.players[0].token}`)
})

function initializeGame(username: string, token: string): void {
  currentGame = new Game(token, username)
}

function hide(element?: HTMLElement): void {
  element.classList.add("hidden")
}