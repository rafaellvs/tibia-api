import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const clubs = await models.Club.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(clubs)
})

export default router
