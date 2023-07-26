import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

//

import star1 from './img/star1.png';
import star2 from './img/star2.png'

function SignUp() {

    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        signUp__inputName: '',
        signUp__inputSurname: '',
        signUp__inputEmail: '',
        signUp__inputAge: '',
        signUp__inputClass: '',
        signUp__inputPassword: '',
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
            await axios.post('http://localhost:8000/signup', {inputValues})
            .then((response) => {
                response.status === 200 ? navigate('/home') : alert('somethin went wrong');
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
    <div className="signUp">
      <div className="signUp__container">
        <form action="POST">
              <img className='logIn__star' src={star1} alt="" />
              <img className='logIn__star' src={star2} alt="" />
            <h1 className="signUp__header">Sign Up</h1>
            <input value={inputValues.signUp__inputName} onChange={handleChange} type="text" className="signUp__input" placeholder='Name' name="signUp__inputName"/>
            <input value={inputValues.signUp__inputSurname} onChange={handleChange} type="text" className="signUp__input" placeholder='Surname' name="signUp__inputSurname"/>
            <input value={inputValues.signUp__inputAge} onChange={handleChange} type="number" className="signUp__input" placeholder='Age' name="signUp__inputAge"/>
            <input value={inputValues.signUp__inputClass} onChange={handleChange} type="text" className="signUp__input" placeholder='Class' name="signUp__inputClass"/>
            <input value={inputValues.signUp__inputEmail} onChange={handleChange} type="email" className="signUp__input" placeholder='Email' name="signUp__inputEmail"/>
            <input value={inputValues.signUp__inputPassword} onChange={handleChange} type="password" className="signUp__input" placeholder='Pasword' name="signUp__inputPassword"/>
            <select name="signUp__select" id="signUp__select">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
           <button type='submit' onClick={sendSignUpData} >Next</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
