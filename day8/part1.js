const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const rows = input.split('\n')

const rowCache = new Map()
const colCache = new Map()

const getRow = y => {
  if (!rowCache.has(y)) {
    rowCache.set(
      y,
      rows[y].split('').map(num => parseInt(num))
    )
  }

  return rowCache.get(y)
}

const getCol = x => {
  if (!colCache.has(x)) {
    colCache.set(
      x,
      rows.map(row => parseInt(row.charAt(x)))
    )
  }

  return colCache.get(x)
}

const perimeter = rows.length * 2 + (rows[0].length - 2) * 2

console.log(
  rows.reduce((visible, _, y) => {
    if (y === 0 || y === rows.length - 1) {
      return visible
    }

    const thisRow = getRow(y)
    return thisRow.reduce((rowVisible, height, x) => {
      if (x === 0 || x === thisRow.length - 1) {
        return rowVisible
      }

      if (!thisRow.slice(0, x).some(leftHeight => leftHeight >= height)) return rowVisible + 1
      if (!thisRow.slice(x + 1).some(rightHeight => rightHeight >= height)) return rowVisible + 1

      const thisCol = getCol(x)

      if (!thisCol.slice(0, y).some(upHeight => upHeight >= height)) return rowVisible + 1
      if (!thisCol.slice(y + 1).some(downHeight => downHeight >= height)) return rowVisible + 1

      return rowVisible
    }, visible)
  }, perimeter)
)
