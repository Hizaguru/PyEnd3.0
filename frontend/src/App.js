import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile'
import useToken from './components/Token/useToken';
import './App.css';

function App() {
  const { token, removeToken, setToken } = useToken()


  return (
    <BrowserRouter>
      <div className='App'>
        <Header token={removeToken} />
        {!token && token !== "" && token !== undefined ?
          <Login setToken={setToken} /> : (
            <>
              <Routes>
                <Route exact path="/profile" element={<Profile token={token} setToken={setToken} />}></Route>
              </Routes>
            </>
          )}
      </div>
    </BrowserRouter >
  );
}

export default App;
