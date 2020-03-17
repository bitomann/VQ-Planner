import React from "react";
import { withRouter, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push('/');
      }
  
  return (
    <header>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {props.hasUser 
            ? 
          <li>
            <Link className="nav-link" to="/exercises">
            Exercises
            </Link>
          </li>
           : null}
          {props.hasUser
            ? 
          <li>
            {/* <Link className="nav-link" to="/routines"> */}
              Routines
            {/* </Link> */}
          </li>
          : null}
          {props.hasUser
            ? 
          <li>
            {/* <Link className="nav-link" to="/profiles"> */}
              Profile
            {/* </Link> */}
          </li>
          : null} 
          {/* vvv IMPORTANT: conditional rendering with a ternary: if something is true do x if something is false do y
          works with booleans. Whatever comes after the ? happens whatever comes after the : doesn't happen vvv */}
          {props.hasUser ? <li> <span className="nav-link" onClick={handleLogout} to="/ "> Logout </span> </li>: null}
          {props.hasUser ? null : <li> <Link className="nav-link" to="/login">Login</Link> </li> }
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
