import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo-MicahProjects.svg';
import Login from '../Login/Login';
import EditProgramContainer from '../EditProgramContainer/EditProgramContainer';
import { find } from 'lodash';

function Header({ selectedProgram, setSelectedProgram, programs }) {
  const [showLogin, setShowLogin] = useState(false);
  const programObj = find(programs.programs, { code: selectedProgram });
  const programName = programObj ? programObj.name : '';

  return (
    <header className="header">
      <div className="header-logo-nav">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          {selectedProgram && <div className='selected-program'>{programName}</div>}
          <EditProgramContainer 
        selectedProgram={selectedProgram} 
        setSelectedProgram={setSelectedProgram}
        programs={programs}
      />
          <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
        </nav>
      </div>
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <Login />
            <button className="close-btn" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
