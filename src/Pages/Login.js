import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import '../Styles/Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
      alert("successfully logged in");
      navigate("/");
    });

  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((user) => {
      console.log(user);
      alert("Successfully logged in");
      navigate("/");
    });


  };
  return (
    <div className='login'>
      <form>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={signIn} > Sign In</Button>
        <p>or</p>
        <div>     <Button onClick={signInWithGoogle} className='login__white'>
          Sign In with Google</Button>
        </div>


        <p>You don't have an Account??</p>
        <Button onClick={() => navigate('/signup')} className='login__green'>Create Account</Button>
      </form>

    </div>
  )
}

export default Login
