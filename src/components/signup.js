import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cpassword) {
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      if (json.success) {
        props.showAlert("Successfully signed up ", "success")
        // save the auth-token and redirect
        localStorage.setItem('token', json.authtoken)
        // redirect karne ke liye usehistory(jo aab useNavigate hogya hai) hook ka use karunga
        history("/login")
      }
      else {
        props.showAlert("Failed to signup", "danger");
      }
    }
    else {
      props.showAlert("passwords do not match", "danger")
    }

  }
  return <>
    <div className='container w-25 p-3 mg'>
      <form onSubmit={handleSubmit} >
        <div className='col-xs-2'>
          <div className='col-xs-4'>
            <label htmlFor='ex3'>Name</label>
            <input className='form-control' id='name' type='text' name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className='col-xs-4'>
            <label htmlFor='ex3'>Email</label>
            <input className='form-control' id='email' type='text' name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className='col-xs-4'>
            <label htmlFor='ex3'>Password</label>
            <input className='form-control' id='password' type='password' name="password" value={credentials.password} onChange={onChange} />
          </div>
        </div>
        <div className='col-xs-2'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            id='cpassword'
            name='cpassword'
            value={credentials.cpassword} onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary my-3'>
          Submit
        </button>
      </form>
    </div>
  </>;
};

export default Signup;