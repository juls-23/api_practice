import React from 'react';
import UserForm from '../components/UserForm';
import UsersList from '../components/UsersList/UsersList';


const UsersListPage = () => {
  return (
    <section>
      <UserForm />
      <UsersList />
    </section>
  );
}

export default UsersListPage;
