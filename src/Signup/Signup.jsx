import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) =>{
    e.preventDefault();

    if(!name || !email || !password){
      alert("Please fill all fields");
      return;
    }

    const userData = {
      name,
      email,
      password
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("userName", name);

    alert("Account created successfully!");

    navigate("/login");
  }

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1 className="signup-title">Create Trading Account</h1>
        <p className="signup-subtitle">Join kevTrading and start investing today</p>

        <form onSubmit={handleSignup} className="signup-form">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">Create Account</button>

        </form>

      </div>

    </div>
  );
}

export default Signup;