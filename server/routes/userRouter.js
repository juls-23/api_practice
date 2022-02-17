const {Router} = require('express');
const {upload} = require('../middlewares/fileUpload.mw')
const UserController = require('../controllers/user.controller');
const paginate = require('../middlewares/paginate.mw');


const userRouter = Router();


userRouter.post('/', upload, UserController.createUser);
userRouter.get('/',paginate, UserController.getAllUsers);




module.exports = userRouter;