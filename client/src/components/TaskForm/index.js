import React, {useEffect} from 'react';
import { Formik, Form, Field} from 'formik';
import * as taskCreators from '../../actions/taskCreators';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { TASK_LIST_SCHEMA } from '../../utilits/validationShema';
import * as UserActionCreators from '../../actions/userCreators';
import InputWrapper from '../InputWrapper';
import Error from '../Error';

const TaskForm = (props) => {
  const {users, error} = useSelector(({users})=>users)
  const {getUsersRequest, clearUserError} = bindActionCreators(UserActionCreators, useDispatch())

  const loadMore = ({limit, offset}={}) => getUsersRequest({offset:users.length});

  useEffect(() => {loadMore()}, []);


  const {createTaskRequest } = bindActionCreators(taskCreators, useDispatch())

  const onSubmit = (values, formikBag) => {
    createTaskRequest(values)
    formikBag.resetForm()
   
  }
  return (
    <>
      {error && <Error cleanError={clearUserError} />}
      <Formik  validationSchema={TASK_LIST_SCHEMA} initialValues={{body:'', userId:'', isDone: false}} onSubmit={onSubmit}>
        <Form>
          <InputWrapper  name='body' placeholder='Add task' />
          <Field name="userId" as="select" placeholder='choose user'>
            <option key='0'>choose users</option>
            {users.map(u =>   <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>)}
          </Field> 
          <input type='submit' value='submit'/>
          <input type='reset' value='reset' />
        </Form>
      </Formik>
    </>
  );
}


export default TaskForm;
