import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const bosss = await models.Boss.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(bosss)
})

export default router
