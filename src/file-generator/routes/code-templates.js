import pluralize from 'pluralize'

export const route = entity =>
`import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const ${entity.toLowerCase()}s = await models.${entity}.findAll(
    {
      order: [['id', 'ASC']],
    }
  )
  
  res.send(${entity.toLowerCase()}s)
})

export default router
`

export const index = entities =>
`// import route files
${entities.map(entity =>
  `import ${pluralize(entity.name.toLowerCase())} from './${pluralize(entity.name.toLowerCase())}'\n`
).join('')}

export default [
  ${entities.map(entity => `${pluralize(entity.name.toLowerCase())}\n`)}
]
`
