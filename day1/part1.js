const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const parts = input.split('\n\n')
const rations = parts.map(part =>
  part
    .split('\n')
    .filter(num => !!num)
    .map(num => parseInt(num))
)

console.log(
  rations
    .map(meals => meals.reduce((calories, meal) => calories + meal, 0))
    .sort()
    .pop()
)
