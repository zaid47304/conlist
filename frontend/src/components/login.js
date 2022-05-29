import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [credentials, setcredentials] = useState({email:"",password:""});
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  let history=useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}) 
          });
        const json=await response.json();
        if(json.success){
          props.showAlert("Successfully logged in","success")
          // save the auth-token and redirect
          localStorage.setItem('token',json.authtoken)
          // redirect karne ke liye usehistory(jo aab useNavigate hogya hai) hook ka use karunga
          history("/")
      }
      else{
        props.showAlert("Failed to login","danger");
    }
      console.log(json);
  }
  return (
    <>
   <div className='container w-25 p-3' style={{marginTop:"7rem"}}>
        <form onSubmit={handleSubmit}>
          <div className='col-xs-2'>
            <div className='col-xs-4'>
              <label htmlFor='ex3'>Email</label>
              <input className='form-control' id='email' name="email" type='email'value={credentials.email} onChange={onChange} />
            </div>
          </div>
          <div className='col-xs-2'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            id="password"
            name="password"
          />
          </div>
          <button type='submit' className='btn btn-primary my-4'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;