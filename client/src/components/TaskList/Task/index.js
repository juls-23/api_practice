import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import parseJSON from 'date-fns/parseJSON';
import {format} from 'date-fns'
import CONSTANTS from '../../../utilits/constants';
import styles from './task.module.scss'
import DoneOutlineIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import ChangeInputForm from '../ChangeInputForm/index';
import DeleteIcon from '@mui/icons-material/Delete'

const Task = (props) => {
  const {task, updateTaskRequest, deleteTaskRequest} = props;
  const [changeBody, setChangeBody] = useState('false')

  const changeStatus = (task)=>{
    const data = {
      isDone: !task.isDone
    }
    updateTaskRequest(task.id, data)
  } 


  return (
    <li className={styles.task}>
      { changeBody ? <p> {task.body} </p> : <ChangeInputForm task={task} changeBody={changeBody} updateTaskRequest={updateTaskRequest} setChangeBody={setChangeBody} /> }
    
      <Link to={`/users/${task.User.id}`}  className={styles.author}>
        <div> 
          <img style={{width: '2rem', height: '2rem', borderRadius: '50%'}}  src={`${CONSTANTS.PATH_IMG}${task.User.imagePath}`}  alt='avatar'/>  {task.User.firstName}
        </div> 
    </Link>
    
      <div className={styles.buttons}>
        <p className={styles.check}>
        <input type='checkbox' 
        checked={task.isDone} onChange={()=>{changeStatus(task)}}
        />
          {task.isDone ? <DoneOutlineIcon className={styles.done} /> : <span lassName={styles.taskProcess}>in process</span>}</p>
          <button style={{backgroundColor: 'inherit',border: 'none', cursor: 'pointer'}} onClick={()=>setChangeBody(!changeBody)}><EditIcon /></button>
        <DeleteIcon className={styles.delBtn} onClick={()=>{deleteTaskRequest(task.id)}}>Delete</DeleteIcon>
      </div>
  
      <div className={styles.date}>
        <p> created: {format(parseJSON(task.createdAt), '   dd-MM-yyyy  hh:mm')}</p> 
        <p> updated: {format(parseJSON(task.updatedAt), '   dd-MM-yyyy  hh:mm')}</p> 
      </div>
    </li>
  );
}

export default Task;
