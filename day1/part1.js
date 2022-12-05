const { rations } = require('./getRations')

console.log(
  rations
    .map(meals => meals.reduce((calories, meal) => calories + meal, 0))
    .sort()
    .pop()
)
