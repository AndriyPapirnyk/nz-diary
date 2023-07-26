import React from 'react';
import './Nullstyle.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome  />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
