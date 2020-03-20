import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  /*  Local method for validation, set loadingStatus, create exercise object, 
  invoke the ApiManager post method, and redirect to the full exercise list */
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
            <label htmlFor="exerciseName">Name :</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="exercise name"
            />
            
            <label htmlFor="type">Type :</label>
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

            <label htmlFor="type">Description :</label>
            <textarea rows="2"
              required
              onChange={handleFieldChange}
              id="description"
              placeholder="description"
            />
          </div>
          <div className="alignRight">
          <Link to={`/exercises`}>
          <button>Cancel</button>
        </Link>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewExercise}
            >Submit</button>
          </div>
        </fieldset>
      </form>
      <Link to={`/exercises`}>
          <button>Cancel</button>
        </Link>
    </>
  );
};

export default ExerciseForm