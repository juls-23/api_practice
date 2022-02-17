import React from 'react';
import TaskForm from '../components/TaskForm';
import TasksList from '../components/TaskList';


const TasksPage = () => {
  return (
    <section>
      <TaskForm />
      <TasksList />
    </section>
  );
}

export default TasksPage;
