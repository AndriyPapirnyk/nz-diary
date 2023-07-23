import './Welcome.css';
import { useNavigate } from 'react-router-dom';

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
      <div className="welcome__row">
        <div className="welcome__btn" onClick={getLoginPage} >Login</div>
        <div className="welcome__btn" onClick={getSignupPage}>SignUp</div>
      </div>
    </div>
  );
}

export default Welcome;
