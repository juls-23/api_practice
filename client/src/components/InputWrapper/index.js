import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss'
import cx from 'classnames'


const InputWrapper = (props) => {
  const {name,  ...rest} = props;
  return (
    <label>
      <Field name={name}>
        {
          ({field, form, meta}) => {
            const className = cx(styles.input,{
              [styles.valid]: meta.touched && !meta.error ,
              [styles.invalid]: meta.touched && meta.error
            })
            return <input {...field}  {...rest} className={className}/>
          }
        }
        
      </Field>
    
      <ErrorMessage name={name} component='span' className={styles.error} />
     
    
    </label> 
  );
}

export default InputWrapper;