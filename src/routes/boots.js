import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const bootss = await models.Boots.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(bootss)
})

export default router
