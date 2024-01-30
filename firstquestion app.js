App.js
import React, { useState, createContext } from 'react';
import Child1 from './Child1';

export const UsersContext = createContext();

function App() {
  const [usersArray, setUsersArray] = useState(['Ashi', 'Arvind', 'Rasa']);

  return (
    <div>
      <h1>App Component</h1>
      <UsersContext.Provider value={usersArray}>
        <Child1 />
      </UsersContext.Provider>
    </div>
  );
}

export default App;