import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import parseJSON from 'date-fns/parseJSON';
import {format} from 'date-fns'
import * as UserActionCreators from '../../actions/userCreators';
import TaskFormUser from '../TaskFormUser';
import DoneOutlineIcon from '@mui/icons-material/Done';


const UserTaskCreator = (props) => {
  const { id } = useParams();
  const {currentUser} = useSelector(({currentUser})=> currentUser);
  const {getUserRequest} = bindActionCreators(UserActionCreators, useDispatch());

 
  useEffect(() => {getUserRequest(id)},[]);
  
  return (
    
    <div>
       <Link to={`/users/${currentUser.id}`}> 
        <p>back to profile </p>
      </Link> 

      <h1>{currentUser.firstName}`s tasks </h1>
      
     <TaskFormUser />

     {currentUser.Tasks &&
     <ul>
     {currentUser.Tasks.map(task=>
      <li key={task.id} >
       <p>task: {task.body}  </p> 
       <p> createdAt: {format(parseJSON(task.createdAt), ' dd-MM-yyyy  hh:mm')}</p> 
       <p> updatedAt: {format(parseJSON(task.updatedAt), ' dd-MM-yyyy  hh:mm')}</p> 
       <p>Status: {task.isDone ? <DoneOutlineIcon /> : 'in process'}</p> 
     </li>
     )}
   </ul>}
     
    </div>
  );
}

export default UserTaskCreator;
