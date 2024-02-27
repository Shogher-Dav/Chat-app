import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

interface SignInFormState  {
  username: string;
  password: string
}

function Login({ onLogin }: any) {

  const [formData, setFormData] = useState<SignInFormState> ({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/apiv1/signin', formData);
      if(response.status === 201) {
        navigate('/chat');
      }
    }catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username"  onChange={handleChange}value={formData.username} required maxLength={20}/>
        <input type="password" placeholder="password" name="password" id="pass" onChange={handleChange}value={formData.password} required maxLength={15}/>
        <button onClick={() => onLogin(formData.username)}>login</button>
      </form>
    </div>
  </div>
  );
}

export default Login;