import fs from 'fs'
import pluralize from 'pluralize'

import entities from '../../entities'

import indexModel from './templates/index'
import routeModel from './templates/route'

const createFile = name => {
  const fileName = `src/routes/${pluralize(name.toLowerCase())}.js`
  const code = routeModel(name)

  fs.writeFile(
    fileName,
    code,
    err => err
      ? console.log(err)
      : console.log(`File ${fileName} created.`)
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
  const code = indexModel(entities)
  fs.writeFile(
    'src/routes/index.js',
    code,
    err => err
      ? console.log(err)
      : console.log('File src/models/index.js created.')
  )
}

createFiles()
