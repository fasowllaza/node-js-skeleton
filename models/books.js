'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with Borrows
      Books.hasMany(models.Borrows, {
        foreignKey: 'BookId',
        as: 'borrows'
      });
    }
  }
  Books.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, // Enable auto-increment
      primaryKey: true // Set as the primary key
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false // Ensure title cannot be null
    }
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};
