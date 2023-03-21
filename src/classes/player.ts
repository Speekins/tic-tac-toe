class Player {
  name: string
  score: string
  
  constructor(name: string) {
    this.name = name,
    this.score = ''
  }

  incrementScore(position: string): void {
    this.score += position
  }
}

module.exports = Player