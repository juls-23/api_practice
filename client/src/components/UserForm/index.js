import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Formik, Form, ErrorMessage} from 'formik';
import * as UserActionCreators from '../../actions/userCreators';
import InputWrapper from '../InputWrapper';
import { USER_LIST_SCHEMA } from '../../utilits/validationShema';

const UserForm = (props) => {
  const {createUserRequest} = bindActionCreators(UserActionCreators, useDispatch())

  const ref = useRef();

  const onSubmit = (values, formikBag) => {
    createUserRequest({values})
    formikBag.resetForm()
    ref.current.value = ""
  }
  return (
    <Formik  
    initialValues={{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      image: ''
    }}
    validationSchema={USER_LIST_SCHEMA}
     onSubmit={onSubmit} >
      {props => (<Form>
        <InputWrapper name='firstName' placeholder='firstName' />
        <InputWrapper name='lastName' placeholder='lastName' />
        <InputWrapper name='email' placeholder='email' />
        <InputWrapper name='password' type='password' placeholder='password' />
        <label>
          <input  ref={ref} name="image" type="file" onChange={(e)=>props.setFieldValue('image', e.target.files[0])} />
          <ErrorMessage name={'image'} component='span' />
        </label>   
       
        <button type='submit'>create User</button>
      </Form>)}
    </Formik>
  );
  
}

export default UserForm;
