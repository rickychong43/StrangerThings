import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';

function Register({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    const user = {username, password};
    /*
      {
        username: 'username value',
        password: 'password value'
      }
    */
   
    const results = await registerUser(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token)
    }
    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input 
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register;