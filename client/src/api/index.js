import axios from 'axios';
import qs from 'query-string';
import FormData from 'form-data';
import CONASTANTS from '../utilits/constants';

const httpClient = axios.create({
  baseURL: CONASTANTS.API_BASE_URL ,
})

export const createTask =  (data) => httpClient.post('/tasks', data);
export const createUserTask = (values, id) => httpClient.post(`/tasks/${id}`, values);
export const getTasks =  ({limit=5, offset=0, }) =>  httpClient.get(`/tasks?${qs.stringify({ limit, offset })}` )
export const updateTask =  ({id, data}) => httpClient.patch(`/tasks/${id}`, data );
export const deleteTask =  (id) => httpClient.delete(`/tasks/${id}`);

export const getUsers = ({limit=5, offset=0})=> httpClient.get(`/users?${qs.stringify({limit, offset})}`);
export const getUser = (id) => httpClient.get(`/tasks/${id}` )

export const createUser = (values) => {
  const formData = new FormData();
  formData.append('firstName', values.firstName);
  formData.append('lastName', values.lastName);
  formData.append('email', values.email);
  formData.append('password', values.password);
  formData.append('image', values.image);
  return  httpClient.post('/users', formData, {headers: {
    "Content-Type": "multipart/form-data",
  }} )
};

