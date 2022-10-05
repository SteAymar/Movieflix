import { Button, TextField } from '@mui/material'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { sendLoginRequest } from '../state/user'
import "../styles/register.css";

const Login = () => {

const navigate = useNavigate()

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const dispatch = useDispatch()

const handleChangeEmail= (e) => {
  setEmail(e.target.value);
};

const handleChangePassword= (e) => {
  setPassword(e.target.value);
};


const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(sendLoginRequest({email,password}))
  navigate("/")
};



  return (
    <div className="register-container" >
    <form className="register-form" >
      <div className="register-text" >
        <p>LOGIN</p>
      </div>
      
      <div className="register-inputs" >
        
        <div className="register-input">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleChangeEmail}
            />
          </div>
      </div>

      <div >
        
        <div className="register-input">
            <TextField type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={handleChangePassword}
            />
          </div>
      </div>

      <Button onClick={handleSubmit} variant="contained" href="#contained-buttons" size="small">
          LOGIN
        </Button>
    </form>
  </div>

  )
}

export default Login