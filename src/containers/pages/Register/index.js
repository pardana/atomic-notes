import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    console.log(this.state.email);
    console.log(this.state.password);
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Pages</p>
          <input
            className="input"
            id="email"
            type="text"
            placeholder="Email"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChangeText}
          />
          <button className="btn" onClick={this.handleRegisterSubmit}>
            Register
          </button>
        </div>

        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
