import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../SignUp/SignUp.css';


export default function UserData(userData) {

    const navigate = useNavigate();


    const dataToSave = userData.userData;


    const [inputValues, setInputValues] = useState({
        signUp__inputEmail: dataToSave.signUp__inputEmail,
        signUp__inputPassword: dataToSave.signUp__inputPassword,
        signUp__inputName: '',
        signUp__inputSurname: '',
        signUp__inputAge: '',
        signUp__inputClass: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
        console.log(inputValues);
    };


    async function sendSignUpData(e) {

      e.preventDefault();

      try {
          await axios.post('http://localhost:8000/signup-data', {inputValues})
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
    <form action="POST">
        <input value={inputValues.signUp__inputName} onChange={handleChange} type="text" className="signUp__input" placeholder='Name' name="signUp__inputName"/>
        <input value={inputValues.signUp__inputSurname} onChange={handleChange} type="text" className="signUp__input" placeholder='Surname' name="signUp__inputSurname"/>
        <input value={inputValues.signUp__inputAge} onChange={handleChange} type="number" className="signUp__input" placeholder='Age' name="signUp__inputAge"/>
        <input value={inputValues.signUp__inputClass} onChange={handleChange} type="text" className="signUp__input" placeholder='Class' name="signUp__inputClass"/>
        <select name="signUp__select" id="signUp__select">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
        </select>
        <button type='submit' onClick={sendSignUpData} >Finish</button>
    </form>
    
  )
}
