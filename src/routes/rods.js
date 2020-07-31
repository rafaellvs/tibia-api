import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const rods = await models.Rod.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(rods)
})

export default router
