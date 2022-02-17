import ACTION_TYPES from "./actionTypes";

export const clearUserError = () => ({
  type: ACTION_TYPES.CLEAR_USER_ERROR
})

export const getUsersRequest = ({limit, offset}) => ({
  type:ACTION_TYPES.GET_USERS_REQUEST,
  payload:{limit, offset}
})  

export const getUsersSuccess = ({users}) => ({
  type:ACTION_TYPES.GET_USERS_SUCCESS,
  payload: {users}
})  

export const getUsersError = (error) => ({
  type:ACTION_TYPES.GET_USERS_ERROR,
  payload: {error}
})  

export const getUserRequest = (id) => ({
  type:ACTION_TYPES.GET_USER_REQUEST,
  payload: {id}
})

export const getUserSuccess = ({user}) => ({
  type:ACTION_TYPES.GET_USER_SUCCESS,
  payload: {user}
})  

export const getUserError = (error) => ({
  type:ACTION_TYPES.GET_USER_ERROR,
  payload: {error}
})  


export const createUserRequest = ({values}) => ({
  type:ACTION_TYPES.CREATE_USER_REQUEST,
  payload: {values}
})  

export const createUserSuccess = ({user}) => ({
  type:ACTION_TYPES.CREATE_USER_SUCCESS,
  payload: {user}
})  


export const createUserError = ({error}) => ({
  type:ACTION_TYPES.CREATE_USER_ERROR,
  payload: {error}
})  