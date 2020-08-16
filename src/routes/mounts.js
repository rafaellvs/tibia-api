import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const mounts = await models.Mount.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(mounts)
})

export default router
