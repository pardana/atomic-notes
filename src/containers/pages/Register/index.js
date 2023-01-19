import React, { Component } from "react";
import "./Register.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    const { email, password } = this.state;
    console.log("data before:", email, password);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        // const user = userCredential.user;
        console.log("success: ", res);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
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
