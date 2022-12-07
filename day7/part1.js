const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')
const lines = input.split('\n').filter(line => !!line.trim())

const structure = lines.reduce(
  ({ files, currentDir }, line) => {
    if (/^\$ ls/.test(line)) return { files, currentDir }
    if (/^\$ cd/.test(line)) {
      const [, newDir] = /^\$ cd (.+)$/.exec(line)

      if (newDir === '..') {
        const nextDir = currentDir.replace(/\/[a-z]+$/, '')
        return { files, currentDir: nextDir }
      }

      return { files, currentDir: currentDir + '/' + newDir }
    }
    if (/^[0-9]+ .+$/.test(line)) {
      const [, fileSize, fileName] = /^([0-9]+) (.+)$/.exec(line)
      files[(currentDir + '/' + fileName).replace(/\/+/g, '/')] = parseInt(fileSize)

      return { files, currentDir }
    }

    return { files, currentDir }
  },
  { files: {}, currentDir: '' }
).files

const dirSizes = Object.entries(structure).reduce((dirs, [path, fileSize]) => {
  let dirName = path

  do {
    dirName = dirName.replace(/\/[^\/]+\/?$/, '/')
    dirs[dirName] = (dirs[dirName] || 0) + fileSize
  } while (dirName !== '/')

  return dirs
}, {})

console.log(
  Object.entries(dirSizes)
    .filter(([dir, size]) => size <= 100000)
    .reduce((total, [, size]) => total + size, 0)
)

/*
{
  name: '/',
  dirs: [
    {
      name: 'a',
      dirs: [],
      files: [
        {
          name: 'i',
          size: 584
        }
      ]
    }
  ],
  files: [

  ]
}
 */
