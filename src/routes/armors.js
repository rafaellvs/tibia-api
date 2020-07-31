import { Router } from 'express'

import models from '../models'

const router = Router()

router.get('/', async (req, res) => {
  const armors = await models.Armor.findAll(
    {
      order: [['id', 'ASC']],
    }
  )

  res.send(armors)
})

export default router
