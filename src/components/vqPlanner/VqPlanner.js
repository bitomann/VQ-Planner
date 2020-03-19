import React, { useState } from 'react';
import NavBar from '../nav/NavBar';
import ApplicationViews from '../ApplicationViews';
import './VgPlanner.css';

// vvv essentially a factory function that returns an object;
// vvv filled with JSX (HTML visual rep)
const VqPlanner = () => {
  const isAuthenticated = () => sessionStorage.getItem("ActiveId") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = user => {
    sessionStorage.getItem("ActiveId", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default VqPlanner;
