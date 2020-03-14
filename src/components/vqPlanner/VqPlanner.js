import React from 'react';
import NavBar from '../nav/NavBar';
import ApplicationViews from '../ApplicationViews';
// import ExerciseCard from '../exercises/ExerciseCard';
import './VgPlanner.css';

// vvv essentially a factory function that returns an object;
// vvv filled with JSX (HTML visual rep)
const VqPlanner = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default VqPlanner;
