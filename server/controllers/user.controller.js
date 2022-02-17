const createError = require('http-errors');
const _ = require('lodash');
const {User, Task} = require('../models');

module.exports.createUser = async (req, res, next) =>{
  try {
    const { body } = req;
    if(req.file){
        body.imagePath = req.file.filename;
    }
    const newUser = _.pick(body, ['firstName', 'lastName', 'email', 'password', 'imagePath'])
    const user = await User.create(newUser)
    if(!user){
      return next(createError(422, 'Validation error'));
    }
    res.status(200).send({data:{user}});
   
  } catch (error) {
    next(error)
    console.log('error',error)
  }
} 


module.exports.getAllUsers = async (req, res, next) =>{
  try {
    const {pagination} = req;
    const users = await User.findAll({ 
      attributes: { 
        exclude: ['password'] 
      },
      ...pagination
    });
    res.status(200).send({data:users});
  } catch (error) {
    next(error)
  }
}

module.exports.getUser = async (req, res, next) =>{
  try {
    const {params: {userId}} = req;
    const user = await User.findByPk(userId, {
      attributes:{exclude:'password'} ,
      include: [
        {
          model:Task
            
        }
      ]     
    });
    if(!user){
      return next(createError(404, 'User not found'));
    }
    res.status(200).send({data:user});
  } catch (error) {
    next(error)
  }
}

