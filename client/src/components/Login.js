import React, { useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
        .post('login', login)
        .then(response => {
            console.log("response", response)
            localStorage.setItem('token', response.data.payload)
            props.history.push("/colors"); 
        // colors now has be made a protected route
        // props.history.push re-directs you to another page
        })
        .catch(error => {
            console.log(`login error: ${error}`);
        });
};

  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form className="" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="username" 
                name="username" 
                value={login.username} 
                label="username"
                onChange={handleChange} 
                className="input"
                />
                <input 
                type="password" 
                placeholder="password" 
                name="password" 
                value={login.password} 
                label="password"
                onChange={handleChange} 
                className="input"
                />
                <button className='start'>Login</button>
            </form>
    </div>
  );
};

export default Login;
