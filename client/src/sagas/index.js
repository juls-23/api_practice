import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { createTaskSaga, createUserTaskSaga, deleteTaskSaga,  getTasksSaga, updateTaskSaga } from "./taskSagas";

import { getUserSaga, getUsersSaga, createUserSaga } from "./userSagas";


function * rootSaga(){  
 yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga)
 yield takeLatest(ACTION_TYPES.CREATE_USER_TASK_REQUEST, createUserTaskSaga)
 yield takeLatest(ACTION_TYPES.GET_TASKS_REQUESTS, getTasksSaga)
 yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga)
 yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST, updateTaskSaga)

 yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga);
 yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserSaga);
 yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga); 
}

export default rootSaga;