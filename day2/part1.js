const { guide, points, getOutcome } = require('./getStrategyGuide')

console.log(
  guide
    .map(([player1, player2]) => points[player2] + getOutcome(player1, player2))
    .reduce((total, points) => total + points, 0)
)
