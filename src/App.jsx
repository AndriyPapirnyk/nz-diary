import React, { useState } from 'react';
import './Nullstyle.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import UserData from './components/UserData/UserData';
import Home from './components/Home/Home';
import Student from './components/Student/Student';
import Teacher from './components/Teacher/Teacher';

function App() {

  const [userData, setUserData] = useState(null);

  const getUserData = (data) => {
    setUserData(data);
    console.log(data)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome  />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp passUserData={getUserData} />} />
        <Route path="/signup-data" element={ <UserData userData={userData} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </Router>
  );
};

export default App;
