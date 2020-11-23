const distance = (sequelize, DataTypes) => {
  const Distance = sequelize.define('distance', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT(),
    },
    image: {
      type: DataTypes.TEXT(),
    },
    lvl: {
      type: DataTypes.TEXT(),
    },
    phys_atk: {
      type: DataTypes.TEXT(),
    },
    element_atk: {
      type: DataTypes.TEXT(),
    },
    range: {
      type: DataTypes.TEXT(),
    },
    atk_mod: {
      type: DataTypes.TEXT(),
    },
    hit_mod: {
      type: DataTypes.TEXT(),
    },
    resist: {
      type: DataTypes.TEXT(),
    },
    imbuing_slots: {
      type: DataTypes.TEXT(),
    },
    skill_boost: {
      type: DataTypes.TEXT(),
    },
    type: {
      type: DataTypes.TEXT(),
    },
    weight: {
      type: DataTypes.TEXT(),
    },
    dropped_by: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    look: {
      type: DataTypes.TEXT(),
    },
    notes: {
      type: DataTypes.TEXT(),
    },
    history: {
      type: DataTypes.TEXT(),
    },
    stackable: {
      type: DataTypes.BOOLEAN(),
    },
    marketable: {
      type: DataTypes.BOOLEAN(),
    },
    usable: {
      type: DataTypes.BOOLEAN(),
    },
    imbuable: {
      type: DataTypes.BOOLEAN(),
    },
    duration: {
      type: DataTypes.TEXT(),
    },
    sellTo: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
    buyFrom: {
      type: DataTypes.ARRAY(DataTypes.JSON()),
    },
  })

  return Distance
}

export default distance
