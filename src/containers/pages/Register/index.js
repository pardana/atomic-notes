import "./Register.scss";
import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Pages</p>
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn">Register</button>
        </div>

        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
