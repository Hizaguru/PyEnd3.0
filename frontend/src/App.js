import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import './App.css';

function App() {
  const [profileData, setProfileData] = useState([])


  return (
    <BrowserRouter>
      <div className='App'>
        <p>asd</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
