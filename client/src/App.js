import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import programs from './assets/programs.json';
import './App.css';


const AuthContext = React.createContext();

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [selectedProgram, setSelectedProgram] = useState("762");
  const [user, setUser] = useState(null); 

  const login = (username, password) => {
   
    if (username === "admin@admin.com" && password === "1234") {
      setUser({ name: username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="app-container">
        <BrowserRouter>
          {/* Show header/footer only when logged in */}
          {user && (
            <Header
              selectedProgram={selectedProgram}
              setSelectedProgram={setSelectedProgram}
              programs={programs}
            />
          )}

          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/search"
                element={
                  <PrivateRoute>
                    <Search
                      selectedProgram={selectedProgram}
                      programs={programs}
                    />
                  </PrivateRoute>
                }
              />
              {/* Default route */}
              <Route path="*" element={<Navigate to={user ? "/search" : "/login"} />} />
            </Routes>
          </div>

          {user && <Footer />}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;
