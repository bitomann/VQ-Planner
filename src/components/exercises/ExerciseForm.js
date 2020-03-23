import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';
import './ExerciseForm.css'

const ExerciseForm = props => {
  const [exercise, setExercise] = useState({ name: "", type: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...exercise };
    stateToChange[evt.target.id] = evt.target.value;
    setExercise(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create exercise 
  object, invoke the ApiManager post method, and redirect to the full exercise list */

//   const constructNewExercise = evt => {
    // const userId = localStorage.getItem("credentials");

//     evt.preventDefault();
//     if (exercise.name === "" || exercise.type === "") {
//       window.alert("Please input an Exercise Name, type, and Description");
//     } else {
//       setIsLoading(true);
//       // Create the exercise and redirect user to exercise list to see all exercises including new one
//       ApiManager.post("exercises", exercise)
//         .then(() => props.history.push("/exercises"));
//     }
//   };

const constructNewExercise = evt => {
    // const userId = localStorage.getItem("credentials");

    evt.preventDefault();
    if (exercise.name === "" ) {
      window.alert("Please name your exercise🤪");
    } else {
    //         const stamp = new Date()
      setIsLoading(true);
      // Create the exercise and redirect user to exercise list to see all exercises including new one
      const newExercise = {
        name: exercise.name,
        type: exercise.type,
        description: exercise.description,
        userId: parseInt(sessionStorage.getItem("ActiveId"))
      }
      ApiManager.post("exercises", newExercise)
        .then(() => props.history.push("/exercises"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="exercise name"
            />
            <label htmlFor="exerciseName">Name :</label>
            
            <select
              type="text"
              required
              onChange={handleFieldChange}
              id="type"
              placeholder="type"
            > 
            <option value="chest">chest</option>
            <option value="back">back</option>
            <option value="shoulders">shoulders</option>
            <option value="arms">arms</option>
            <option value="legs">legs</option>
            <option value="fullBody">full body</option>
            </select>
            <label htmlFor="type">Type :</label>

            <textarea 
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="description"
            />
            <label htmlFor="type">Description :</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewExercise}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ExerciseForm