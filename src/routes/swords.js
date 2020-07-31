import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const swords = await models.Sword.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(swords)
})

export default router
