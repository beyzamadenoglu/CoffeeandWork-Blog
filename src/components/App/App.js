import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './useToken.js';


function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Work and Coffee Station</h1>
      <BrowserRouter>
        <Routes>
           <Route path="/dashboard"  element={<Dashboard />} />
           <Route path="/preferences"  element={<Preferences />} />
           <Route path="/register"  element={<Register />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

