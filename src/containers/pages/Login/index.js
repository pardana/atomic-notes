import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserAPI } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = () => {
    const { email, password } = this.state;
    console.log("data before:", email, password);

    this.props.loginAPI({ email, password });
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login Pages</p>
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
            title="Login"
            onClick={this.handleLoginSubmit}
            loading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
