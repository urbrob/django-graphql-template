import React, { Component } from "react";
import { TextInput, Button } from 'react-materialize'
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.mutate({
        variables: {password: this.state.password, username: this.state.username}
      }).then(function(data) {
        localStorage.setItem('token', data.data.tokenAuth.token)
        window.location.reload();
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextInput password
            label="Password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button
            type="Login"
            waves="light"
            disabled={!this.validateForm()}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
