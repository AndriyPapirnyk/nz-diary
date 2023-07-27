import './LogIn.css';
import axios from 'axios';

//

import star1 from './img/star1.png';
import star2 from './img/star2.png';

function LogIn() {
  return (
    <div className="logIn">
      <div className="logIn__container">
        <form action="submit">
            <img className='logIn__star' src={star1} alt="" />
            <img className='logIn__star' src={star2} alt="" />
          <h1>Log In</h1>
          <input  type="text" placeholder='Name'/>
          <input type="text" placeholder='Surname'/>
          <input type="password" placeholder='Password'/>
          <button type='submit'>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
