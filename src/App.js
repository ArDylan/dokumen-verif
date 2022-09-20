import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from'./assets/Navbar.js';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/DetailCertificate';
import Ktp from './pages/DetailKTP';
import React from 'react';

class App extends React.Component{
  render(){
    return(
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/detail-certificate" element={<Certificate/>} />
          <Route path="/detail-ktp" element={<Ktp/>} />
        </Routes>
      </Router>
    </>
    )
  }
}

export default App;
