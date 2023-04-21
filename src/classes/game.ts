import Player from "./player"

class Game {
  players: Player[]
  currentPlayer: Player
  gameBoard: { 1: string, 2: string, 3: string, 4: string, 5: string, 6: string, 7: string, 8: string, 9: string }
  winConditions: string[]
  winner: string 

  constructor(token: string, humanName: string) {
    this.players = [new Player(token, humanName), new Player(token === 'X' ? 'O' : 'X', 'Computer')]
    this.currentPlayer = this.players[this.assignRandom()]
    this.gameBoard = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    }
    this.winConditions = ['123', '456', '789', '147', '258', '369', '159', '357']
    this.winner = ''
  }

  checkForWin() {
    for (let i = 0; i < this.winConditions.length; i++) {
      if (this.currentPlayer.score.includes(this.winConditions[i])) {
        this.winner = this.currentPlayer.name
        console.log(`Winner is ${this.winner}!`)
        return this.currentPlayer.name
      }
    }
    this.changeTurn()
  }

  changeTurn() {
    this.currentPlayer === this.players[0] ?
      this.currentPlayer = this.players[1] : this.currentPlayer = this.players[0]
  }

  computerTurn(): number {
      const random: number = Math.floor(Math.random() * 9)
      console.log(random)
      return random
  }

  addScore(box: number) {
    this.currentPlayer.score += String(box)
    this.gameBoard[box] = this.currentPlayer.token
    console.log(this.gameBoard)
  }

  assignRandom(): number {
    const num = Math.random()
    return num > 0.5 ? Math.ceil(num) : Math.floor(num)
  }
}

export default Game