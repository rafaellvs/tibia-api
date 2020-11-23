import pluralize from 'pluralize'

const indexModel = entities =>
`// import route files
${entities.map(entity =>
  `import ${pluralize(entity.name.toLowerCase())} from './${pluralize(entity.name.toLowerCase())}'\n`
).join('')}

export default [
  ${entities.map(entity => `${pluralize(entity.name.toLowerCase())}\n`)}
]
`

export default indexModel
