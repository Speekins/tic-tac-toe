import Player from "./player"

class Game {
  winConditions: string[]
  //player: {name: string, score: string}
  players: Player[]
  currentPlayer: Player
  gameBoard: { 1: string, 2: string, 3: string, 4: string, 5: string, 6: string, 7: string, 8: string, 9: string }

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
  }

  checkForWin() {
    for (let i = 0; i < this.winConditions.length; i++) {
      if (this.currentPlayer.score.includes(this.winConditions[i])) {
        return this.currentPlayer.name
      }
    }
    this.changeTurn()
  }

  changeTurn() {
    this.currentPlayer === this.players[0] ?
      this.currentPlayer = this.players[1] : this.currentPlayer = this.players[0]
  }

  addScore(box: number) {
    this.currentPlayer.score += String(box)
  }

  assignRandom(): number {
    const num = Math.random()
    return num > 0.5 ? Math.ceil(num) : Math.floor(num)
  }
}

export default Game