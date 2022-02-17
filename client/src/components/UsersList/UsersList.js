import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router-dom/';
import {useSelector, useDispatch} from 'react-redux';
import * as UserActionCreators from '../../actions/userCreators';
import CONSTANTS from '../../utilits/constants'
import Error from '../Error';

const UsersList = (props) => {
  const {users, error} = useSelector(({users})=>users)
  const {getUsersRequest, clearUserError} = bindActionCreators(UserActionCreators, useDispatch())

  const loadMore = ({limit, offset}={}) => getUsersRequest({offset:users.length});

  useEffect(() => {loadMore()}, []);

  return (
    <section>
      <h2>Users List</h2>     
      <ul>
      {error && <Error clearError={clearUserError}/>}
      
        {users.map(u=>(
         
        <li key={u.id} style={{border: '5px solid grey', textAlign: 'left', width: '39%', margin: '2rem auto' }}>

          <img style={{width: '3rem', height: '3rem', borderRadius: '50%'}} src={`${CONSTANTS.PATH_IMG}${u.imagePath}`}  alt='avatar'/>

          <span>  {u.firstName} {u.lastName} </span>        
          <div style={{display: 'flex', justifyContent: 'center', marginBottom:'2rem'}}>
            <Link to={`/users/${u.id}`}> 
              <p style={{marginRight: '2rem'}}>profile</p>
            </Link> 

            <Link to={`/tasks/${u.id}`}> 
              <p>tasks</p>
            </Link> 
          </div>
        </li> 
      
   ))}
      </ul>      
      <button onClick={loadMore}>Load more</button>  
     
    </section>
  );
}

export default UsersList;

