import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  currentUser: {},
  isFetching:false,
  error: null
}

const handleRequest =  produce((draftState, action)=>{
  draftState.isFetching = true;
})

const handleError = produce((draftState, action)=>{
  const {payload:{error}} = action;
  draftState.error = error;
  draftState.isFetching = false;
})

const handlers = {
  [ACTION_TYPES.CLEAR_USER_ERROR]:produce((draftState, action)=>{
    draftState.error = null;
  }),
  [ACTION_TYPES.GET_USER_REQUEST]: handleRequest,
  
  [ACTION_TYPES.GET_USER_SUCCESS]: produce((draftState, action)=>{
    const {payload:{user}} = action;
    draftState.isFetching = false;
    draftState.currentUser = user
  
  }),

  [ACTION_TYPES.GET_USER_ERROR]: handleError,

  [ACTION_TYPES.CREATE_USER_TASK_ERROR]: handleError,

  [ACTION_TYPES.CREATE_USER_TASK_REQUEST]: handleError,

  [ACTION_TYPES.CREATE_USER_TASK_SUCCESS]: produce((draftState, action)=>{
    const {payload: {task:newTask}} = action;
    draftState.isFetching = false;
    draftState.currentUser.Tasks.unshift(newTask.data)
  }),
}



function currentUserReducer(state=initialState, action){
  const {type} = action;
  const handler = handlers[type];
  if(handler){
    return handler(state, action);
  }

  return state;
}

export default currentUserReducer;