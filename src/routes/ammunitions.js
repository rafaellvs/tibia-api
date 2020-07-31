import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const ammunitions = await models.Ammunition.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(ammunitions)
})

export default router
