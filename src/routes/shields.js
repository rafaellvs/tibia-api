import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const shields = await models.Shield.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(shields)
})

export default router
