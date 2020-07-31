import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const legss = await models.Legs.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(legss)
})

export default router
