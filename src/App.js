import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import React, { useState } from 'react';
import Login from './components/Login/Login';

function App() {

  const [token, setToken] = useState();

  if(token) {
    return <Login setToken={setToken} />
  }

  return (
      <Router>
      <Routes>
        <Route path='/events' element={<Events/>} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
