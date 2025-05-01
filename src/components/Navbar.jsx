import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-100">
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow w-100"
        style={{
          width: '100vw',
          margin: 0,
          background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
          backdropFilter: 'blur(10px)',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold text-white fs-4" to="/" style={{ letterSpacing: '1px' }}>
            🌐 Rest Countries
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/">
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav align-items-center">
              {user ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-white fs-6">
                      Welcome, <strong className="text-info">{user.username}</strong>
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-light ms-2 rounded-pill px-3 py-1"
                      onClick={logout}
                      style={{ transition: '0.3s' }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = '#fff', e.target.style.color = '#2c5364')}
                      onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#fff')}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn btn-outline-info ms-2 rounded-pill px-3 py-1"
                    style={{ transition: '0.3s' }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#17a2b8', e.target.style.color = '#fff')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#17a2b8')}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
