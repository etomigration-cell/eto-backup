import React, { useState, useContext } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "views/Login/Login";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Search from "views/Search/Search";
import programs from "assets/programs.json";
import "./App.css";

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

  console.log(user);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="app-container">
        <BrowserRouter>
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
              <Route
                path="*"
                element={<Navigate to={user ? "/search" : "/login"} />}
              />
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
