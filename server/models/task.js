'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey:'userId'
      });
    }
  }
  Task.init({
    body: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:true,
        is: /^.{3,40}$/
      }
    },
    isDone: {
      type:DataTypes.BOOLEAN,
      field: 'is_done',
      allowNull: false,
      defaultValue:false,
      validate:{
        notNull:true
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored:true
  });
  return Task;
};