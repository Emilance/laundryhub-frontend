import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {createUser} from '.././data/endpoints'
import '../Styles/Signup.css'
import { setToken, setUser } from '../utils/auth';


function Signup() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({name : "", email:"", password:""});
    // const history = useNavigate()
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
      }
    const signUp = async (e) => {
        e.preventDefault()
        try {
            const reqResp = await createUser(userDetails)
            await setToken(reqResp.data.token)
            await setUser(reqResp.data)
            await navigate("/")
        } catch (error) {
            console.log(error)
            console.log(error.response.data)


        }

    }
    return (
        <div className='sign-up'>
            <h3>Create a new Account</h3>
            <form>

            <input type="name"
                 placeholder='Enter your name'
                 name ="name"
                 value={userDetails.name}
                  onChange={handleChange}  />
                <input type="email"
                 placeholder='Enter your email'
                 name ="email"
                 value={userDetails.email}
                  onChange={handleChange}  />

                <input type="password"
                 placeholder='Password'  
                 name= "password"
                 value={userDetails.password}
                 onChange={ handleChange} />
                <Button onClick={signUp} > Sign Up</Button>
            </form>
        </div>
    )
}

export default Signup
