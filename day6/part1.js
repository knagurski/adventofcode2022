const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')

console.log(
  input
    .trim()
    .split('')
    .findIndex((_, index, letters) => [...new Set(letters.slice(index, index + 4))].length === 4) + 4
)
