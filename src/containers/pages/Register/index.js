import React, { Component } from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";

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

  handleRegisterSubmit = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .registerAPI({ email, password })
      .catch((err) => err);

    if (res) {
      this.setState({
        email: "",
        password: "",
      });
    }
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
            value={this.state.email}
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangeText}
          />
          <Button
            title="Register"
            onClick={this.handleRegisterSubmit}
            loading={this.props.isLoading}
          />
        </div>

        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
