const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const rows = input.split('\n').filter(row => !!row.trim())

console.log(
  rows
    .map(row => row.split(''))
    .map(row => {
      const firstHalf = row.slice(0, row.length / 2)
      const secondHalf = row.slice(row.length / 2)

      return [firstHalf, secondHalf]
    })
    .map(row => row.map(half => [...new Set(half)].sort()))
    .map(([firstHalf, secondHalf]) => firstHalf.find(letter => secondHalf.includes(letter)))
    .map(letter => {
      const code = letter.charCodeAt(0)
      return code - (code > 96 ? 96 : 38)
    })
    .reduce((sum, code) => sum + code, 0)
)
