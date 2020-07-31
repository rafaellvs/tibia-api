import fs from 'fs'
import pluralize from 'pluralize'

import { formatAttribute } from '../../helpers/utils'

import { route, index } from './code-templates'
import entities from '../../entities'

const createFile = name => {
  const fileName = `src/routes/${pluralize(formatAttribute(name))}.js`
  const code = route(name)

  fs.writeFile(
    fileName,
    code,
    err => err ? console.log(err) : console.log(`File ${fileName} created.`)
  )
}

const createFiles = () => {
  console.log('Generating files...')

  // create folder
  const dir = 'src/routes'
  !fs.existsSync(dir) && fs.mkdirSync(dir)

  // create routes
  entities.map(async entity =>
    await createFile(entity.name)
  )

  // create index
  const code = index(entities)
  fs.writeFile(
    'src/routes/index.js',
    code,
    err => err
      ? console.log(err)
      : console.log('File src/models/index.js created.')
  )
}

createFiles()
