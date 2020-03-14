import React, { useState, useEffect } from 'react';
// vvv ExerciseCard data is pulled to populate the return vvv // 
import ExerciseCard from './ExerciseCard';
import ApiManager from '../../modules/ApiManager';

const ExerciseList = props => {
// The empty array passed to useState is the initial value of the state.
// useState returns an array. The first element in the array is the current 
// value of the state. const [exercises, setExercises]
// The second element in the array is a function that gives us access to change the state.
// We can call setExercises when we need to change the value of the exercises stored in state.

  // The initial state is an empty array //
  const [exercises, setExercises] = useState([]);
  console.log("inside useState()")
  //  Hooks begin with 'use' useXXX //

  const getExercises = () => {
    // After the data comes back from the API, I
    //  use the setExercises function to update state
    return ApiManager.getAll("exercises").then(ExercisesFromAPI => {
      console.log("about to call setExercises()")
      setExercises(ExercisesFromAPI)
    });
  };

  const deleteExercise = id => {
    ApiManager.delete(id)
      .then(() => ApiManager.getAll("exercises").then(setExercises));
  };

  // vvv useEffect is a member of a family of tools that React broadly calls "hooks". 
  // Hooks are a way to gain access to some of React's underlying functionality.
  // The useEffect hook accepts two parameters: a function and an array. 
  // The function parameter is where you place the code that interacts with an external resource. 
  // The array parameter is used to control when the function parameter is executed. vvv
  // got the Exercises from the API on the component's first render
  useEffect(() => {
    getExercises();
    console.log("Inside useEffect()")
    // vvv The empty array argument tells React to call the function 
    // on the first render of the component vvv //
  }, []);
//   The function argument to useEffect tells React to call the getExercises() 
// function (that will fetch data from our API). The empty array argument 
// tells React to call the function on the first render of the component.
console.log("About to return JSX", exercises);

  // vvv Finally we use map() to "loop over" the exercises array to show a list of exercise cards vvv //
  return (
  <>
    <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {props.history.push("/exercises/new")}}>
      New
      </button>
    </section>
    
    <div className="container-cards">
      {exercises.map(exercise =>
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          deleteExercise={deleteExercise}
          {...props}
          />)}
    </div>
  </>
  );
};

export default ExerciseList