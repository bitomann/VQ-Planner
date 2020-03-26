import React, { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import ApiManager from '../../modules/ApiManager';
import "./ExerciseList.css"

const ExerciseList = props => {
// The empty array passed to useState is the initial value of the state.
// useState returns an array. The first element in the array is the current 
// value of the state. const [exercises, setExercises]
// The second element in the array is a function that gives us access to change the state.
// We can call setExercises when we need to change the value of the exercises stored in state.

  // The initial state is an empty array //
  const [exercises, setExercises] = useState([]);
  console.log("inside useState()")
  //  Hooks start with "use...", 'useState' and 'useEffect' = React Hooks //

  const getExercises = () => {
    // After the data comes back from the API, I
    //  use the setExercises function to update state
    return ApiManager.getAll("exercises").then(ExercisesFromAPI => {
      console.log("about to call setExercises()")
      setExercises(ExercisesFromAPI)
    });
  };
    // vvv Flow of delete  = Click the discharge button
    // Invoke handleDelete function which will invoke the ApiManager delete function; pass the id.
    // Once an item is deleted, invoke the ApiManager getAll() method.
    // With the new data, invokes setExercises() and set exercises equal to the new data.
    // The component re-renders to display the new exercise data.
    // <ExerciseList> render maps over the data and re-displays cards for each exercise. vvv
  const deleteExercise = id => {
    ApiManager.delete("exercises", id)
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
      Add New
      </button>
    </section>
    
    <div className="container-cards">
{/* vvv Using the array method '.map', for each item/exercise in the array 'exercises',
return an <ExerciseCard /> with a reference to the single item/exercise. 
This reference is now a property on the <ExerciseCard /> and is referred to as props. vvv */}
      {exercises.map(exercise =>
// vvv Because <ExerciseCard /> is included in the render method of <ExerciseList />, it is a child 
// component of the <ExerciseList /> component. vvv
        <ExerciseCard
 //  vvv The 'key' is how React keeps track of re-rendering only the things that have changed. vvv
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