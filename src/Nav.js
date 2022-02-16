import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    const authenticated = isAuthenticated();
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          {authenticated && (
            <li>
              <Link to="/private">Private</Link>
            </li>
          )}
          <li>
            <button onClick={authenticated ? logout : login}>
              {authenticated ? "Log Out" : "Log In"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
