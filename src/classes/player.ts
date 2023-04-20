class Player {
  name: string
  token: string
  score: string

  constructor(token: string, humanName?: string) {
    this.name = humanName || 'Computer',
    this.token = token
    this.score = ''
  }

  incrementScore(position: string): void {
    this.score += position
  }
}

export default Player