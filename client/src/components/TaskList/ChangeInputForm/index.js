import React from 'react';
import {  Form, Formik } from 'formik';
import { TASK_USER_LIST_SCHEMA } from '../../../utilits/validationShema';
import InputWrapper from '../../InputWrapper';

const ChangeInputForm = (props) => {
  const {task, changeBody, updateTaskRequest, setChangeBody} = props;

  const onSubmit = (values, formikBag) => {
    updateTaskRequest(values.id, values)
    setChangeBody(!changeBody)  
    formikBag.resetForm()  
  }

  return (
    <>
    <Formik validationSchema={TASK_USER_LIST_SCHEMA} initialValues={{
      body: task.body,
      id: task.id
     }} 
      onSubmit={onSubmit}>
      <Form>
        <InputWrapper name='body' placeholder='Add task' />
        <input type='submit' value='Set'/>
      </Form>
    </Formik>   
</>
  );
}

export default ChangeInputForm;
