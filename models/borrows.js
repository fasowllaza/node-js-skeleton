'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Borrows extends Model {
    static associate(models) {
      Borrows.belongsTo(models.Users, { foreignKey: 'UserId' });
      Borrows.belongsTo(models.Books, { foreignKey: 'BookId' });
    }
  }
  
  Borrows.init({
    BorrowsId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    startBorrow: DataTypes.DATE,
    endBorrow: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Borrows',
  });
  
  return Borrows;
};
