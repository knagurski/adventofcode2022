const { rations } = require('./getRations')

console.log(
  rations
    .map(meals => meals.reduce((calories, meal) => calories + meal, 0))
    .sort()
    .reverse()
    .slice(0, 3)
    .reduce((totalCalories, calories) => totalCalories + calories, 0)
)
