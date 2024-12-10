import '../css/login.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function Login(){

  const userRef = useRef();
  const passRef = useRef();
const nav =useNavigate();

async function handleSubmit() {

  const username = userRef.current.value;
  const password = passRef.current.value;
  if(username && password){

    const response = await fetch("http://localhost:5000/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
  body:JSON.stringify({username,password})
    })
  const token = await response.json()
  
  localStorage.setItem("token",token);
  
    const data =  response.status;
  if(data === 200 ){
    alert("login succesfull");
    nav('/userData');
    
  }
  else{
    alert("username or password is wrong");
  }

  }
  else{
    alert("enter both username and password")
  }



  
}


    return (
    <>
    
    <div className="login-container">
      
      <div className="login-box">
        <h2 className="login-title">SIGN IN</h2>
        <div className="avatar">
          <img src="/boxSeam.png" alt="User Avatar" />
        </div>
       
          <div className="input-field">
            <input type="text" placeholder="username" ref={userRef}  required />
          </div>
          <div className="input-field">
            <input type="password" placeholder="password" ref={passRef} required />
          </div>
          <div className="actions">
          <a href="" className="forgot-link" onClick={()=>nav('/register')}>
              Create a account
            </a>
            <a href="#" className="forgot-link" >
              Forgot your password?
            </a>
          </div>
          <button type="button" className="login-btn" onClick={handleSubmit}>
            LOGIN
          </button>
       
      </div>
    </div>
    
    </>
    )

}

export default Login;