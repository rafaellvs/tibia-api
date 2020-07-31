import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const amulets = await models.Amulet.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(amulets)
})

export default router
