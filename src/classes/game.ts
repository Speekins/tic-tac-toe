class Game {
  winConditions: string[]
  //player: {name: string, score: string}
  players: Player[]
  currentPlayer: Player

  constructor(humanName: string) {
    this.players = [new Player(humanName), new Player('Computer')]
    this.currentPlayer = this.players[this.assignRandom()],
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

  assignRandom(): number {
    const num = Math.random()
    return num > 0.5 ? Math.ceil(num) : Math.floor(num)
  }
}

module.exports = Game