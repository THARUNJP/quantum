import React, { useRef } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const nameRef = useRef();
  const dobRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const onSubmit = async() => {
    const name = nameRef.current.value;
    const dob = dobRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;  
if(name && dob && password && email){

  const response = await fetch("http://localhost:5000/create",{
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
body:JSON.stringify({name,dob,email,password})
  })

  const data =  response.status;

 if(data === 200){

  alert("registered sucessfully");
  nav('/')
 } 
 else{
  alert(" not registered sucessfully");
 }



}
else{
  alert("every fields are required")
}
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create Account</h2>
        
          <div className="input-field">
            <input type="text" placeholder="name" ref={nameRef} />
          </div>
          <div className="input-field">
            <input type="date" ref={dobRef} />
          </div>
          <div className="input-field">
            <input type="text" placeholder="email" ref={emailRef} />
          </div>
          <div className="input-field">
            <input type="password" placeholder="password" ref={passRef} />
          </div>
          <div className="actions">
            <a href="#" className="forgot-link" onClick={() => nav('/')}>
              Sign In
            </a>
          </div>
          <button type="button" className="login-btn" onClick={onSubmit}>
            Create
          </button>
      
      </div>
    </div>
  );
}

export default Register;
