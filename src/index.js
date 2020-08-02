import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pluralize from 'pluralize'
import 'regenerator-runtime'

import { sequelize } from './models'

import entities from './entities'
import routes from './routes'

const app = express()

// middleware
app.use(cors())

// routes
entities.map((entity, index) =>
  app.use(
    `/${pluralize(entity.name.toLowerCase())}`,
    routes[index]
  )
)
sequelize.sync().then(() => {
  app.listen(
    process.env.PORT,
    () => console.log(`Tibia API listening on port ${process.env.PORT}`)
  )
})
