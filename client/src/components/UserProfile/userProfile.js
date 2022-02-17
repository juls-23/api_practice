import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../../actions/userCreators';
import CONSTANTS from '../../utilits/constants'



const UserProfile = (props) => {
  const { id } = useParams();
  
  const {currentUser} = useSelector(({currentUser})=> currentUser);
  const {getUserRequest} = bindActionCreators(UserActionCreators, useDispatch())

  useEffect(() => {getUserRequest(id)},[]);
  
  return (
    
    <div>
      <h1>USER PROFILE </h1>
      <img style={{width: '5rem', height: '5rem', borderRadius: '50%'}} src={`${CONSTANTS.PATH_IMG}${currentUser.imagePath}`}  alt='avatar'/>
      <p> Name: {currentUser.firstName} {currentUser.lastName}</p>
      <a href={`mailto:${currentUser.email}`}> Email: {currentUser.email}</a>

      <Link to={`/tasks/${currentUser.id}`}> 
        <p>create tasks</p>
      </Link> 
      {/* <UserTaskCreator /> */}

    </div>
  );
}

export default UserProfile;
