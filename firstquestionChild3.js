import React, { useContext } from 'react';
import { UsersContext } from './App';

function Child3() {
  const usersArray = useContext(UsersContext);

  return (
    <div>
      <h4>Child-3 Component</h4>
      <ul>
        {usersArray.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Child3;