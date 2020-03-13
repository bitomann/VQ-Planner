import React from 'react';
import ExerciseCard from '../exercises/ExerciseCard';
import './VgPlanner.css';
// vvv essentially a factory function that returns an object;
// vvv filled with JSX (HTML visual rep)
function VqPlanner() {
  return (
    <div>
    <div>
      <h1>
        VQ-Planner
        <br />
      </h1>
    </div>
    <div>
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
    </div>
    </div>
  );
};

export default VqPlanner;
