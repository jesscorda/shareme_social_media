import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './container';
import { Login } from './components';

function App() {
  return (
    <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/*" element={<Home />} />
  </Routes>
  );
}

export default App;
