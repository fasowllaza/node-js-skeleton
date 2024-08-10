'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association with Users
      Borrows.belongsTo(models.Users, {
        foreignKey: 'UserId',
        as: 'user'
      });

      // Define association with Books
      Borrows.belongsTo(models.Books, {
        foreignKey: 'BookId',
        as: 'book'
      });
    }
  }
  Borrows.init({
    BorrowsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, // Enable auto-increment
      primaryKey: true // Set as the primary key
    },
    BookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startBorrow: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endBorrow: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Borrows',
  });
  return Borrows;
};
