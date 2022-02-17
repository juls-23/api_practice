import { put } from 'redux-saga/effects'
import * as API from '../api'
import * as UserActionCreators from '../actions/userCreators';

export function * getUsersSaga({payload}){
  try {
    const {data:{data:users}} = yield API.getUsers(payload)
    yield put(UserActionCreators.getUsersSuccess({users}))
  } catch (error) {
    yield put(UserActionCreators.getUsersError({error}))
  }
}

export function *  getUserSaga({payload}){
  try {
    const {data:{data:user}} = yield API.getUser(payload.id)
    yield put(UserActionCreators.getUserSuccess({user}))
  } catch (error) {
    yield put(UserActionCreators.getUserError({error}))
  }
}

export function * createUserSaga({payload}){
  try {
    const {data:{data:{user}}} = yield API.createUser(payload.values)
    yield put(UserActionCreators.createUserSuccess({user}))
  } catch (error) {
    yield put(UserActionCreators.createUserError({error})) 
  }
}




