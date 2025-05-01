import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)', // gradient bg
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white p-5 rounded-4 shadow"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className="mb-4 text-center fw-bold" style={{ color: '#333' }}>
          Welcome Back 👋
        </h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control rounded-3"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100 rounded-3 fw-semibold"
          style={{ transition: '0.3s' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '')}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
