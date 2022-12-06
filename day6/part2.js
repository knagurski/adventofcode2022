const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')

console.log(
  input
    .trim()
    .split('')
    .findIndex((_, index, letters) => [...new Set(letters.slice(index, index + 14))].length === 14) + 14
)
