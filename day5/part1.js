const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')

const [layoutStr, instructionsStr] = input.split('\n\n')

const getStacksFromLayout = layout => {
  const crates = layout.split('\n')
  const stackNumbers = crates.pop()

  return stackNumbers.split('').reduce((stacks, stackNumber, index) => {
    if (!!stackNumber.trim()) {
      stacks.push(
        crates.reduce((stack, row) => {
          if (/[A-Z]/.test(row.charAt(index))) {
            stack.push(row.charAt(index))
          }
          return stack
        }, [])
      )
    }

    return stacks
  }, [])
}

const stacks = getStacksFromLayout(layoutStr)

const getInstruction = instructionStr => {
  const [, qty, origin, destination] = /move ([0-9]+) from ([0-9]+) to ([0-9]+)/.exec(instructionStr)

  return { qty: parseInt(qty), origin: parseInt(origin), destination: parseInt(destination) }
}

instructionsStr
  .split('\n')
  .filter(row => !!row.trim())
  .map(getInstruction)
  .forEach(({ qty, origin, destination }) => {
    const load = stacks[origin - 1].splice(0, qty)
    stacks[destination - 1].splice(0, 0, ...load.reverse())
  })

console.log(stacks.reduce((word, stack) => word + stack[0], ''))
