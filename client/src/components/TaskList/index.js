import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as taskCreators from '../../actions/taskCreators';
import Error from '../Error';
import Task from './Task';

const TasksList = () => {
  const {tasks, error} = useSelector(({task})=> task);;
  const {getTasksRequest,updateTaskRequest, deleteTaskRequest, clearTaskError } = bindActionCreators(taskCreators, useDispatch())

  const loadMore = ({limit, offset}={}) => getTasksRequest({limit:6, offset:tasks.length});

  useEffect(() => {loadMore()}, [] );
 
  return ( 
    <section >
      <h2>Tasks</h2>
      {error && <Error clearError={clearTaskError}/>}
      <ul>
        {
          tasks.map((task)=><Task key={task.id} task={task} updateTaskRequest={updateTaskRequest} deleteTaskRequest={deleteTaskRequest} />)
        }
      </ul>
      <button onClick={loadMore}>load more</button>
    </section>
  );
}


export default TasksList;
