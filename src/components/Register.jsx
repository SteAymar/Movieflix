import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/api/register`, {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((res) => res.data);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <form className="register-form" >
        <div className="register-text">
          <p>REGISTER</p>
        </div>

        <div className="register-inputs">
          <div className="register-input">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleChangeName}
            />
          </div>
          <div className="register-input">
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              onChange={handleChangeLastName}
            />
          </div>
          <div className="register-input">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={handleChangeEmail}
            />
          </div>
          <div className="register-input">
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={handleChangePassword}
            />
          </div>
        </div>

        <Button onClick={handleSubmit} variant="contained" href="#contained-buttons" size="small">
          REGISTER
        </Button>
      </form>
    </div>
  );
};

export default Register;
