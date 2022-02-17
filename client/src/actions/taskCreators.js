import ACTION_TYPES from "./actionTypes";

export const clearTaskError = () => ({
 type: ACTION_TYPES.CLEAR_TASK_ERROR 
})

export const createTaskRequest = (values) => ({
  type:ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: {values}
})

export const createTaskSuccess = ({task}) => ({
  type:ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: {task}
})


export const createTaskError = (error) => ({
  type:ACTION_TYPES.CREATE_TASK_ERROR,
  payload: {error}
})


export const createUserTaskRequest = ({values, id}) => ({
  type:ACTION_TYPES.CREATE_USER_TASK_REQUEST,
  payload: {values, id}
})

export const createUserTaskSuccess = ({task}) => ({
  type:ACTION_TYPES.CREATE_USER_TASK_SUCCESS,
  payload: {task}
})

export const createUserTaskError = (error) => ({
  type:ACTION_TYPES.CREATE_USER_TASK_ERROR,
  payload: {error}
})


export const getTasksRequest = ({limit, offset}) => ({
  type:ACTION_TYPES.GET_TASKS_REQUESTS,
  payload:{limit, offset}
})

export const getTasksSuccess = ({tasks}) => ({
  type:ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: {tasks}
})

export const getTasksError = ({error}) => ({
  type:ACTION_TYPES.GET_TASKS_ERROR,
  payload: {error}
})


export const deleteTaskRequest = (id) => ({
  type:ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: {id}
})

export const deleteTaskSuccess = ({task}) => ({
  type:ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: {task}
})

export const deleteTaskError = ({error}) => ({
  type:ACTION_TYPES.DELETE_TASK_ERROR,
  payload: {error}
})

export const updateTaskRequest = (id, data) => ({
  type:ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: {id, data}
})

export const updateTaskSuccess = ({task}) => ({
  type:ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: {task}
})  

export const updateTaskError = ({error}) => ({
  type:ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: {error}
})

