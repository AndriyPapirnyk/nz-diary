import './SignUp.css';

function SignUp() {
  return (
    <div className="signUp">
      <h1 className="signUp__header">Sign-Up</h1>
      <input type="text" className="signUp__input" placeholder='name' name="signUp__inputName"/>
      <input type="text" className="signUp__input" placeholder='surname' name="signUp__inputSurname"/>
      <input type="text" className="signUp__input" placeholder='age' name="signUp__inputAge"/>
      <input type="text" className="signUp__input" placeholder='class' name="signUp__inputClass"/>
      <input type="text" className="signUp__input" placeholder='pasword' name="signUp__inputPassword"/>
      <select name="signUp__select" id="signUp__select">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
    </div>
  );
}

export default SignUp;
