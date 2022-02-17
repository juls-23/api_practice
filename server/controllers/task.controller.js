const createError = require('http-errors');
const {Task, User} = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const {body} = req;
    const newTask = await Task.create(body);
    if(!newTask){
      return next(createError(404, 'Validation eror'));
    }
    const id = newTask.id 
    const task = await Task.findByPk(id,{
      include: [
        {
          model:User,
          attributes:{
            exclude:'password'},
        }
      ],      
    })
    res.status(200).send({data:[task]});
  } catch (error) {
    next(error)
  }
}

module.exports.createUserTask = async (req, res, next) => {
  try {
    const {body, params:{userId}} = req;
    const user = await User.findByPk(userId);
    if(!user){
      throw new Error('user not found');
    }
    const task = await user.createTask(body);
    res.status(200).send({data:task});
  } catch (error) {
    next(error)
  }
}

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const {params:{userId}} = req;
    const user = await User.findByPk(userId,{
      attributes: { 
        exclude: ['password'] 
      },
      include: [
        {
          model:Task,
        }
      ], 
    });
    if(!user){
      throw new Error('user not found');
    }
    res.status(201).send({data:user});
  } catch (error) {
    next(error)
  }
}

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const {pagination} = req;
    const tasks = await Task.findAll({
      include: [
        {
          model:User,
          attributes:{
            exclude:'password'},
        }
      ], 
      ...pagination
    })
    res.status(201).send({data:tasks});
  } catch (error) {
    next(error)
  }
}

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {params: {taskId}} = req;
    const task = await Task.findByPk(taskId)
    if(!task){
      const error = createError(404, 'Task not found');
      return next(error);
    }
    await task.destroy()
    res.status(201).send({data: task})
  } catch (error) {
    next(error)
  }
}

module.exports.updateTaskStatus = async(req, res, next)=>{
  try {
    const {params:{taskId}, body} = req;
    const task = await Task.findByPk(taskId,  {
      include: [
      {
        model:User,
        attributes:{
          exclude:'password'},
      }
    ]}, )
    await task.update(body,{
      returning:true
    })
    res.status(201).send({data: task})
  } catch (error) {
    next(error)
  }
}
