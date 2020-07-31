import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const distances = await models.Distance.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(distances)
})

export default router
