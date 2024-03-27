import React, { useState } from 'react';
import { useAuthentication } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css'

const LoginComponent = () => {
  const navigate = useNavigate();
  const { login } = useAuthentication();
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginDetails = () => {
    if (userName !== '' && password !== '') {
      login(userName);
      navigate('/RecipeList', { replace: true });

    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <h2> Login </h2>
      <div>
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(prop) => setUserName(prop.target.value)}
          className="inputField"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(prop) => setPassword(prop.target.value)}
          className="inputField"
        />
        <button onClick={handleLoginDetails} className="loginButton"> Login </button>
        {error && <p className="error-message">{error}</p>}
      </div>

    </div>
  );
}

export default LoginComponent;
