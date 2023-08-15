import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

//

import star1 from './img/star1.png';
import star2 from './img/star2.png';

function LogIn({userData, setUserData}) {

  const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        logIn__inputEmail: '',
        logIn__inputPassword: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    };

    async function sendSignUpData(e) {

      e.preventDefault();

      try {
          await axios.post('http://localhost:8000/login', {inputValues})
          .then((response) => {
            let data = response.data
            console.log(data);
            if(response.status === 200) {
              if(data.status === 'Student') {
                navigate('/student');
              } else {
                navigate('/teacher');
              }
            } else {
              alert('something went wrong')
            }
            setUserData(data)
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      }
      catch(error) {
          console.log(error);
      }
    };



  return (
    <div className="logIn">
      <div className="logIn__container">
        <form action="POST">
            <img className='logIn__star' src={star1} alt="" />
            <img className='logIn__star' src={star2} alt="" />
          <h1>Log In</h1>
          <input value={inputValues.logIn__inputEmail} onChange={handleChange} type="email" className="logIn__input" placeholder='Email' name="logIn__inputEmail"/>
          <input value={inputValues.logIn__inputPassword} onChange={handleChange} type="password" className="logIn__input" placeholder='Pasword' name="logIn__inputPassword"/>
          <button type='submit' onClick={sendSignUpData} >Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
