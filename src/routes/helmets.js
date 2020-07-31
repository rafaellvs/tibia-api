import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const helmets = await models.Helmet.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(helmets)
})

export default router
