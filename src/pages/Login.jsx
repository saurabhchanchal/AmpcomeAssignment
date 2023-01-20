import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../Images/logo.svg";

const Login = () => {
  return (
    <div>
      <p>Its login page</p>
      <div className="login">
        <div className="leftbox">
          <div className="text1"><p>Welcome to App Name</p></div>
          <div className="text2"><p>Get ahead of the curve. Join the next generation of health heroes.</p></div>
          <div className="frame">
            <img src={logo} alt="pic" />
          </div>
        </div>
        <div className="rightbox">
          
          <div className="Signin">
          <div className="text3"><p>Sign-in to Your Account</p></div>
          <div className="inputbox">
          <input type="text" placeholder="UserName" />
          <input type="text" placeholder="password" />
          </div>
          <div className="selectbox">
            {/* <p>Select Unit</p> */}
            <select></select>
          </div>
          <Link to={"/dashboard"}>
          <button>Sign in</button>  
          </Link>
          
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
