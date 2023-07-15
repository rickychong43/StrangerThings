import React, { useState } from 'react';
import { login } from '../ajax-requests';

function Login({ setToken, navigate }) {
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
  
    const results = await login(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/');
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

export default Login;