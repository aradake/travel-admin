import './App.css';
import Navbar from './navigation-bar/components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
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
      <Navbar />
      <Routes>
        <Route path='/events' element={<Events/>} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
