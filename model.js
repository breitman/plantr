const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr',
  {logging: false}
);

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
});

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded:{
    type: Sequelize.BOOLEAN
  }
});

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
});

Plot.belongsTo(Gardener)
Gardener.belongsTo(Vegetable, {as: 'favorite-veggie'});
// Gardener.hasOne(Plot, {foreignKey: 'plotId'});
Plot.belongsToMany(Vegetable, {through: 'veggie-plot'});
Vegetable.belongsToMany(Plot, {through: 'veggie-plot'});

module.exports = {Vegetable, db};
