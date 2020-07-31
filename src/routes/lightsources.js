import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const lightsources = await models.LightSource.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(lightsources)
})

export default router
