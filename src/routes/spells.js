import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const spells = await models.Spell.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(spells)
})

export default router
