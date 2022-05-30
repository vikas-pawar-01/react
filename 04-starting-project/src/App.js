import React, {useState} from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UsersList/UserList';

import './index.css';

const DEFAULT_USERS = [
  {id: 'u1', name: 'Vikas', age: 31},
  {id: 'u2', name: 'Pawar', age: 30},
];

const App = () => {

  const [users, setUsers] = useState([...DEFAULT_USERS]);

  const submitDataHandler = formData => {
    const newUser = {name: formData.name, age: formData.age, id:Math.random().toString() };
    
    setUsers( prevProps => {
        return ( [ newUser, ...prevProps ] );
    }); 
  }

  const deleteUserHandler = userId => {    
    setUsers( prevProps => {
      const newUsers = prevProps.filter( user => user.id !== userId );
      
      return ( [ ...newUsers ] );
    });
  };

  let content = <p style={{ textAlign: 'center', color: 'white' }}>No goals found. Maybe add one?</p>

  if( users.length > 0 ) {
    content = (
      <UserList users={users} deleteUser={deleteUserHandler} />
    );
  } 

  return (
      <div className='outerbox'>
        <UserForm onSubmitData={submitDataHandler} />        
        {content}
      </div>
  );
}

export default App;
