const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const rows = input.split('\n').filter(row => !!row.trim())

const guide = rows.map(row => row.split(' '))

const points = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissor
  X: 1, // rock
  Y: 2, // paper
  Z: 3 // scissor
}

const outcome = {
  win: 6,
  lose: 0,
  draw: 3
}

const getOutcome = (player1, player2) => {
  if (points[player1] === points[player2]) return outcome.draw

  return points[player1] % 3 < points[player2] ? outcome.win : outcome.lose
}

module.exports = { guide, points, outcome, getOutcome }
