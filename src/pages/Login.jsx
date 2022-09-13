import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formConatiner">   
    <div className="formWrapper">    
    <span className="logo">Baat Chit</span>
    <span className="title">Register</span>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='email'/>
        <input type="password" placeholder='password'/>
        {/* <input type="password" placeholder='password'/>
        <input style={{display:"none"}}type="file" id="file"/>
        <label htmlFor="file">
            <img src={Add} alt=""/>
            <span>Add an Avatar</span>
        </label> */}
        <button>Sign In</button>
        {err && <span>Something went wrong</span>}
    </form>
    <p>You do'nt have an account ? <Link to="/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login;
