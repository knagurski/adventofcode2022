const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const parts = input.split('\n\n')

const rations = parts.map(part =>
  part
    .split('\n')
    .filter(num => !!num)
    .map(num => parseInt(num))
)

module.exports = { rations }
