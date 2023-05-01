import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../data/endpoints';
import '../Styles/Login.css';
import { setToken, setUser } from '../utils/auth';

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  // handle sign in
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const reqResp = await login(userDetails);
      await setToken(reqResp.data.token);
      await setUser(reqResp.data);
      await navigate("/");
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };

  // handle Google OAuth
  const googleOAuth = () => {
   try {
     setIsLoading(true)
    window.open("https://laundryhubapi.onrender.com/auth/google", "_self");
   } catch (error) {
    setIsLoading(false)
    console.log(error)
   }
  };

  return (
    <div className="login">
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
        />

        <Button className="login__button" onClick={signIn}>
          Sign In
        </Button>
        <p>or</p>
        <Button className="login__button  signinGoogle" onClick={googleOAuth}>
        {isLoading ? <div className="spinner"></div> : " Sign In with Google"}

        </Button>

        <p>Don't have an account?</p>
        <Button
          className="login__button login__button--green"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </Button>
      </form>

     
    </div>
  );
}

export default Login;
