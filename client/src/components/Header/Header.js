import React, { useState, useContext } from 'react';
import './Header.css';
import logo from 'images/logo-MicahProjects.svg';
import Login from 'views/Login/Login';
import EditProgramContainer from 'components/EditProgramContainer/EditProgramContainer';
import { find } from 'lodash';
import { AuthContext } from 'App'; 
import { useNavigate } from 'react-router-dom';

function Header({ selectedProgram, setSelectedProgram, programs }) {
  const [showLogin, setShowLogin] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : '';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          {selectedProgram && (
            <div className="selected-program">{programName}</div>
          )}

          <EditProgramContainer
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            programs={programs}
          />

          {!user ? (
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
          ) : (
            <div className="user-actions">
              <span className="welcome-text">Welcome, {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      {showLogin && !user && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login />
            <button
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;