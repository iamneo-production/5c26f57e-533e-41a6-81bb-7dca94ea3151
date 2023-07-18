import React, { useState , useEffect } from 'react';
import Signin from './Signin';
import HomePage from './Homepage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { login , selectUser} from './userSlice';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/Homepage');
    dispatch(
      login({
        email:email,
        password:password,
        isLoggedIn:true,
      })
    );
  };
  useEffect(()=>{
    if(user){
      navigate("/Homepage");
    }
  })
  return (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email:</label>
              <input type="email" className="form-control" id="loginEmail" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Password:</label>
              <input type="password" className="form-control" id="loginPassword" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <p>don't have an account? </p>
            <Link to="/Signin">Register here</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

