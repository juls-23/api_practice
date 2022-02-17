const {Router} = require('express');
const TaskController = require('../controllers/task.controller');
const paginate = require('../middlewares/paginate.mw');


const taskRouter = Router();

taskRouter.post('/', TaskController.createTask)
taskRouter.post('/:userId', TaskController.createUserTask)

taskRouter.get('/:userId', paginate, TaskController.getUserTasks)
taskRouter.get('/', paginate, TaskController.getAllTasks)

taskRouter.patch('/:taskId',  TaskController.updateTaskStatus)
taskRouter.delete('/:taskId',  TaskController.deleteTask)


module.exports = taskRouter;