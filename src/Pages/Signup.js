import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../data/endpoints';
import { setToken, setUser } from '../utils/auth';
import '../Styles/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const reqResp = await createUser(userDetails);
      await setToken(reqResp.data.token);
      await setUser(reqResp.data);
      await navigate('/');
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      console.log(error.response.data);
    }
  };

  return (
    <div className="signup-container">
      <h3>Create a new account</h3>
      <form className="signup-form">
        <div className="input-container">
          <input
            className="signup-input"
            type="text"
            placeholder="Name"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>
        <Button className="signup-button" onClick={signUp}>
      {isLoading ? <div className="spinner"></div> : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}



export default Signup