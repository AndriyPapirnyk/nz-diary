import './SignUp.css';

//

import star1 from './img/star1.png';
import star2 from './img/star2.png'

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__container">
        <form action="submit">
              <img className='logIn__star' src={star1} alt="" />
              <img className='logIn__star' src={star2} alt="" />
            <h1 className="signUp__header">Sign Up</h1>
            <input type="text" className="signUp__input" placeholder='Name' name="signUp__inputName"/>
            <input type="text" className="signUp__input" placeholder='Surname' name="signUp__inputSurname"/>
            <input type="text" className="signUp__input" placeholder='Age' name="signUp__inputAge"/>
            <input type="text" className="signUp__input" placeholder='Class' name="signUp__inputClass"/>
            <input type="text" className="signUp__input" placeholder='Pasword' name="signUp__inputPassword"/>
            <select name="signUp__select" id="signUp__select">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
           <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
