const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const rows = input.split('\n').filter(row => !!row.trim())

console.log(
  rows
    .map(row => row.split(''))
    .reduce((groups, row, index) => {
      const group = Math.floor(index / 3)
      groups[group] = [...(groups[group] || []), row]
      return groups
    }, [])
    .map(([a, b, c]) => a.find(letter => b.includes(letter) && c.includes(letter)))
    .map(letter => {
      const code = letter.charCodeAt(0)
      return code - (code > 96 ? 96 : 38)
    })
    .reduce((sum, code) => sum + code, 0)
)
