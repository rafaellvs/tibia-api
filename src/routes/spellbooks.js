import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const spellbooks = await models.Spellbook.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(spellbooks)
})

export default router
