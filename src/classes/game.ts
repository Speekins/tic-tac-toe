class Game {
  winConditions: number[][]
  //player: {name: string, score: string}
  players: Player[]

  constructor(humanName: string) {
    this.players = [new Player(humanName), new Player('Computer')]
    this.winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  }
}

module.exports = Game