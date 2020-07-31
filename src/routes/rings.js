import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const rings = await models.Ring.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(rings)
})

export default router
