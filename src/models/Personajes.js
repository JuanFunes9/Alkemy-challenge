const { DataTypes } = require( 'sequelize' );
const sequelize = require( '../database/database' );

const Personajes = sequelize.define( 'personajes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  history: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
} );

module.exports = Personajes;