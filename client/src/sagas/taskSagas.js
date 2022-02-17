import { put } from 'redux-saga/effects'
import * as API from '../api'
import * as taskCreators from '../actions/taskCreators';


export function * createUserTaskSaga({payload}){
  try {
    const {data:task} = yield API.createUserTask(payload.values, payload.id)
    yield put(taskCreators.createUserTaskSuccess({task})) 
  } catch (error) {
    yield put(taskCreators.createUserTaskError({error}))
  }
}
export function * createTaskSaga({payload}){
  try {
    const {data:{data:[task]}} = yield API.createTask(payload.values)
    yield put(taskCreators.createTaskSuccess({task})) 
  } catch (error) {
    yield put(taskCreators.createTaskError({error}))
    
  }
}

export function * getTasksSaga({payload}){
  try {
    const {data:{data: tasks}} = yield API.getTasks(payload)
    yield put(taskCreators.getTasksSuccess({tasks}))
  } catch (error) {
    yield put(taskCreators.getTasksError({error}))
    
  }
}


export function * deleteTaskSaga({payload}){
  try {
    const {data:{data: task}} = yield API.deleteTask(payload.id)
    yield put(taskCreators.deleteTaskSuccess({task}))
  } catch (error) {
    yield put(taskCreators.deleteTaskError({error}))
    
  }
}

export function * updateTaskSaga({payload}){
  try {
    const {data:{data: task}} = yield API.updateTask(payload)
    yield put(taskCreators.updateTaskSuccess({task}))
  } catch (error) {
    yield put(taskCreators.updateTaskError({error}))
  }
}



