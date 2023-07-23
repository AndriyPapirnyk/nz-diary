import './LogIn.css';

function LogIn() {
  return (
    <div className="logIn">
        <h1>Log In</h1>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Surname'/>
        <input type="password" placeholder='Password'/>
        <button>login</button>
    </div>
  );
}

export default LogIn;
