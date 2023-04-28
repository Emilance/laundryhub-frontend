import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Await, useNavigate } from 'react-router-dom';
import { login, signInWithGoogle } from '../data/endpoints';
import '../Styles/Login.css'
import { setToken, setUser } from '../utils/auth';

function Login() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({ email:"", password:""});

  //handle input change

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setUserDetails(prevState => ({ ...prevState, [name]: value }));
  }
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const reqResp = await login(userDetails)
      await setToken(reqResp.data.token)
      await setUser(reqResp.data)
      await navigate("/")

  } catch (error) {
      console.log(error)
      console.log(error.response.data)


  }


  };

 const signInWithOauth = async () => {
      try {
      const resp = await  signInWithGoogle()
      console.log(resp)
      } catch (error) {
        console.log(error)
      }

}


  return (
    <div className='login'>
      <form>
        <input type="email"
         placeholder='Enter your email'
         name="email"
          value={userDetails.email} 
          onChange={handleChange}
          />

        <input type="password" 
        placeholder='Password' 
        name="password"
        value={userDetails.password}  
        onChange={handleChange}

        />

        <Button onClick={signIn} > Sign In</Button>
        <p>or</p>
        <div>     <Button  onClick={() => signInWithOauth()} className='login__white'>
          Sign In with Google</Button>
        </div>


        <p>You don't have an Account??</p>
        <Button onClick={() => navigate('/signup')} className='login__green'>Create Account</Button>
      </form>

    </div>
  )
}

export default Login
