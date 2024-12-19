import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (email === 'test11@gmail.com' && password === 'pass123') {
      alert('Login Successful');
      navigate('/products');
    } else {
      alert('Invalid Credentials. Try Again!');
    }
  };

  return (
    <div className="login-page">
      <form> 
        <h2>Login Here</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Log In</button>
      
      </form>

    </div>
  );
};

export default LoginPage;
