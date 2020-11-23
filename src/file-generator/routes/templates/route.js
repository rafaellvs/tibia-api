const routeModel = entity =>
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

export default routeModel
