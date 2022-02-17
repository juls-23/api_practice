import { BrowserRouter, Routes, Route ,NavLink } from "react-router-dom";
import {Suspense, lazy} from 'react'
import NotFoundPage from "./pages/NotFoundPage";
import './App.css';
const UserTaskCreatorPage = lazy(()=> import('./pages/UserTaskCreatorPage'))
const UserPage = lazy(()=> import('./pages/userPage'))
const TasksPage = lazy(()=> import('./pages/tasksPage'))
const UsersListPage = lazy(()=> import('./pages/UsersListPage'))

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
          <NavLink to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
          <NavLink to='/task'>Tasks</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={'...Loading'}>
        <Routes>
          <Route path='/' element={<UsersListPage />} /> 
          <Route path='/task' element={<TasksPage />} /> 
          <Route path='/users/' element={<UsersListPage />} />          
          <Route path='/tasks/:id/' element={<UserTaskCreatorPage />} /> 
          <Route path='/users/:id/' element={<UserPage />} /> 
          <Route  path="*" element={<NotFoundPage />} />
        </Routes> 
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
