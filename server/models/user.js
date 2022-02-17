'use strict';
const {Model} = require('sequelize');
const {isBefore} = require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class User extends Model { 
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey:'userId'
      });
    }
  }
  User.init({
    firstName: {
      field: 'first_name',
      allowNull: false,
      type:DataTypes.STRING(64),
      validate:{
        notNull:true,
        notEmpty: true,
        is: /[A-Za-z]{3,16}/,
      }
    },
    lastName: {
      field: 'last_name',
      allowNull: false,
      type:DataTypes.STRING(128),
      validate:{
        notNull:true,
        notEmpty: true,
        is: /[A-Za-z]{3,16}/,
      }
    },
    email: {
      allowNull: false,
      unique:true,
      type:DataTypes.STRING,
      validate:{
        notNull:true,
        notEmpty: true,
        isEmail: true,
      }
    },
    password: {
      field: 'password_hash',
      allowNull: false,
      type:DataTypes.TEXT,
      set(value) {
        this.setDataValue('password', 'hashpassword');
      }
    },
    imagePath: {
      field:'image_path',
      type:DataTypes.STRING,
      defaultValue: 'avatar.jpg'
    },
  }, {
    sequelize,
    modelName: 'User', 
    tableName: 'users',
    underscored:true
  });
  return User;
};