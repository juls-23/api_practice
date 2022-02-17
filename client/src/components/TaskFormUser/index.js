import React from 'react';
import { Formik, Form} from 'formik';
import * as taskCreators from '../../actions/taskCreators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { TASK_USER_LIST_SCHEMA } from '../../utilits/validationShema';
import InputWrapper from '../InputWrapper';


const TaskFormUser = (props) => {
  const {createUserTaskRequest } = bindActionCreators(taskCreators, useDispatch())
  const { id } = useParams();

  const onSubmit = (values, formikBag) => {
    createUserTaskRequest({values, id})
    formikBag.resetForm()
  }
  return (
    <>
    <Formik validationSchema={TASK_USER_LIST_SCHEMA} initialValues={{
      body:'',
      isDone: false}} 
      onSubmit={onSubmit}>
      <Form>
        <InputWrapper name='body' placeholder='Add task'/>
        <input type='submit' value='Add task'/>
        <input type='reset' value='reset'/>
      </Form>
    </Formik>
    </>
  );
}


export default TaskFormUser;
