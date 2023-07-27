import './Welcome.css';
import { useNavigate } from 'react-router-dom';

//

import logo from './img/logo.png';
import illustration from './img/illustration.png';
import line from './img/line.png'

function Welcome() {

  const navigate = useNavigate();

  const getLoginPage = () => {
    navigate('/login');
  };

  const getSignupPage = () => {
    navigate('/signup');
  };

  return (
    <div className="welcome">
      <img className='welcome__line' src={line} alt="" />
      <div className="welcome__container">
        <div className="welcome__main">

        <div className="welcome__logo">
          <img src={logo} alt="" />
          <h1>NZ</h1>
        </div>

        <p>Welcome to NZ! A wonderful <br />electronic diary designed for <br /> teachers and diligent students</p>

        <div className="welcome__row">
          <button className="welcome__btn" onClick={getLoginPage} >Log In</button>
          <button className="welcome__btn" onClick={getSignupPage}>Sign Up</button>
        </div>

        </div>

        <img className='welcome__illustration' src={illustration} alt="" />

      </div>
    </div>
  );
}

export default Welcome;
