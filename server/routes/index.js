const {Router} = require('express');
const taskRouter = require('./taskRouter');
const userRouter = require('./userRouter');

const router = Router();

router.use('/api/tasks', taskRouter)
router.use('/api/users', userRouter);

module.exports = router;