import * as Yup from 'yup';

const TASK_SCHEMA =  Yup.string().matches(/^.{3,40}$/,'should be less then 20 letters').required('required field')

export const TASK_LIST_SCHEMA = Yup.object({
  body: TASK_SCHEMA,
  userId: Yup.number().typeError('you must specify a number').min(0, 'Min value 0.').required('required field'),
})

export const TASK_USER_LIST_SCHEMA = Yup.object({
  body: TASK_SCHEMA
})

export const NAME_SCHEMA = Yup.string().matches(/[A-Za-z]{3,16}/, 'Should be more than 4 characters').required('required field');

export const USER_LIST_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: Yup.string().email('Invalid email').required('required field'),
  password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,'Invalid password').required('required field'),
  image: Yup.mixed()
})

