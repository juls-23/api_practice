import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks:[],
  isFetching:false,
  error: null
}

const handlerRequests = produce((draftState, action)=>{
  draftState.isFetching = true;
  
})

const handlerErrors = produce((draftState, action)=>{
  const {payload:{error}} = action;
  draftState.error = error;
  draftState.isFetching = false;
})


const handlers = {
  [ACTION_TYPES.CLEAR_TASK_ERROR]:produce((draftState, action)=>{
    draftState.error = null;
  }),

  [ACTION_TYPES.CREATE_TASK_ERROR]: handlerErrors,
  [ACTION_TYPES.GET_TASKS_ERROR]:  handlerErrors,
  [ACTION_TYPES.DELETE_TASK_ERROR]:  handlerErrors,
  [ACTION_TYPES.UPDATE_TASK_ERROR]:  handlerErrors,

  [ACTION_TYPES.CREATE_TASK_REQUEST]: handlerRequests,
  [ACTION_TYPES.GET_TASKS_REQUESTS]: handlerRequests,
  [ACTION_TYPES.DELETE_TASK_REQUESTS]: handlerRequests,
  [ACTION_TYPES.UPDATE_TASK_REQUESTS]:  handlerRequests,

  
  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action)=>{
    const {payload: {task}} = action;
    draftState.isFetching = false;
    draftState.tasks.unshift(task)
  }),

  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action)=>{
    const {payload: {tasks: newTasks}} = action;
    draftState.isFetching = false;
    draftState.tasks.push(...newTasks)
  }),

  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action)=>{
    const {payload: {task}} = action;
    draftState.isFetching = false;
    const index = draftState.tasks.findIndex(t => t.id === task.id)
    if (index !== -1) draftState.tasks.splice(index, 1)
  }),

  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action)=>{
    const {payload: {task}} = action;
    draftState.isFetching = false;
    const index = draftState.tasks.findIndex(t => t.id === task.id)
    if (index !== -1) draftState.tasks[index] = task
  })
}


function taskReducer(state=initialState, action){
  const {type} = action;
  const handler = handlers[type];
  if(handler){
    return handler(state, action);
  }

  return state;
}


export default taskReducer;