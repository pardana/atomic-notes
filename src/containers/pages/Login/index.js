import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserAPI } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";
import { withRouter } from "react-router-dom";

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

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const res = await this.props
      .loginAPI({ email, password })
      .catch((err) => err);

    if (res) {
      console.log("login success");
      this.setState({
        email: "",
        password: "",
      });
      history.push("/");
    } else {
      console.log("login failed");
    }
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

export default connect(reduxState, reduxDispatch)(withRouter(Login));
