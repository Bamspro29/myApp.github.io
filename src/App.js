import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import Inscription from './components/inscription/Inscription';
import Mdpf from './components/login/Mdpf';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Hotelist from './components/Hotelist';
import Hoteliew from './components/Hoteliew';
import FormhandleShow from './components/FormhandleShow';
import './index.css'

function App() {
  return (
    <BrowserRouter>
     
      <main className='bg'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/Mdpf" element={<Mdpf />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Hotellist" element={<Hotelist />} />
          <Route path="/hoteliew" element={<Hoteliew />} />
          <Route path="/formhandleShow" element={<FormhandleShow />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;