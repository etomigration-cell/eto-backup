import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login/Login'
import Header from './Header/Header'
import Footer from './Footer/Footer';
import Search from './Search/Search';
import programs from './assets/programs.json'

import './App.css';

function App() {
  console.log('test')
   const [selectedProgram, setSelectedProgram] = useState("762");
   console.log(selectedProgram)

  return (
    <div className="app-container">
    <BrowserRouter>
    <Header
        selectedProgram={selectedProgram}
        setSelectedProgram={setSelectedProgram}
        programs={programs}
      />
      <div className='main-content'>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search selectedProgram={selectedProgram} programs={programs}/>} />
    </Routes>
    </div>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
