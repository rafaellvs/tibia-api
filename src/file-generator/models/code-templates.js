export const model = (entity, attributes) =>
`const ${entity.toLowerCase()} = (sequelize, DataTypes) => {
  const ${entity} = sequelize.define('${entity.toLowerCase()}', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ${attributes.map(att =>
      att === 'dropped_by' || att === 'loot'
        ? `${att}: {\ntype: DataTypes.ARRAY(DataTypes.TEXT)\n}`
        : `${att}: {\ntype: DataTypes.STRING\n}`
    )}
  })

  return ${entity}
}

export default ${entity.toLowerCase()}
`

export const index = entities =>
`// import models
${entities.map(entity =>
  `import ${entity.name.toLowerCase()} from './${entity.name}.js'\n`
).join('')}

import { Sequelize, DataTypes } from 'sequelize'

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    define: { timestamps: false },
  }
)

const models = {
  ${entities.map(entity =>
    `${entity.name}: ${entity.name.toLowerCase()}(sequelize, DataTypes)\n`
  )}
}

export default models
`
