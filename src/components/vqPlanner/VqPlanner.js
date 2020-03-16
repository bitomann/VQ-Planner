import React, { useState } from 'react';
import NavBar from '../nav/NavBar';
import ApplicationViews from '../ApplicationViews';
// import ExerciseCard from '../exercises/ExerciseCard';
import './VgPlanner.css';

// vvv essentially a factory function that returns an object;
// vvv filled with JSX (HTML visual rep)
const VqPlanner = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default VqPlanner;
