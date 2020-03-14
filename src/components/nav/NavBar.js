import React from "react";
import { Link } from "react-router-dom";
// import { withRouter, Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

  return (
    <header>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/exercises">
            Exercises
            </Link>
          </li>
          <li>
            {/* <Link className="nav-link" to="/routines"> */}
              Routines
            {/* </Link> */}
          </li>
          <li>
            {/* <Link className="nav-link" to="/profiles"> */}
              Profile
            {/* </Link> */}
          </li>
          <li>
            {/* <Link className="nav-link" onClick={clearUser} to="/ "> */}
              Log Out
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
// export default withRouter(NavBar);




//   const activeUser = sessionStorage.getItem("Active Id")
//   const clearUser = () => {
//     sessionStorage.clear();
//     }
  
//   if (activeUser === null) {
//     return (
//       <header>
//       <nav>
//         <ul>
//           <li>
//             <Link className="nav-link" to="/register">
//               Register
//             </Link>
//           </li>
//           <li>
//             <Link className="nav-link" to="/login">
//               Log In
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//     );
//   } else {
