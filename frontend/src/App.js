import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import useToken from './components/Token/useToken';
import './App.css';

function App() {
  const { removeToken } = useToken()


  return (
    <BrowserRouter>
      <div className='App'>
        <Header token={removeToken} />
        <Login />

      </div>

    </BrowserRouter>
  );
}

export default App;
