import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const wands = await models.Wand.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(wands)
})

export default router
