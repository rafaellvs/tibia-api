import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const creatures = await models.Creature.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(creatures)
})

export default router
