import React from "react";
// import { Link } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = props => {
    // const activeUser = sessionStorage.getItem("Active Id")
    const clearUser = () => {
        sessionStorage.clear();
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
          {/* {props.hasUser 
            ? */}
          <li>
            <Link className="nav-link" to="/exercises">
            Exercises
            </Link>
          </li>
           {/* : null}  */}
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
          {props.hasUser
            ?
          <li>
            <Link className="nav-link" onClick={clearUser} to="/ ">
              Logout
            </Link>
          </li>
          : null}
          <li>
              <Link className="nav-link" to="/login">
              Login
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// export default NavBar;
export default withRouter(NavBar);
