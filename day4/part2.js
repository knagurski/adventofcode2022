const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const rows = input.split('\n').filter(row => !!row.trim())

console.log(
  rows.filter(row => {
    const [[aStart, aEnd], [bStart, bEnd]] = row.split(',').map(half => half.split('-').map(num => parseInt(num)))

    return (
      (aStart >= bStart && aStart <= bEnd) ||
      (aEnd >= bStart && aEnd <= bEnd) ||
      (bStart >= aStart && bStart <= aEnd) ||
      (bEnd >= aStart && bEnd <= aEnd)
    )
  }).length
)
