import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const axes = await models.Axe.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(axes)
})

export default router
