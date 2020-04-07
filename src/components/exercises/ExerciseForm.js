import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiManager from '../../modules/ApiManager';
import './ExerciseForm.css'

// const arrayOfTypes = [
//   {
//     id: '1 - select...',
//     name: 'select...'    
//   },
//   {
//     id: '2 - chest',
//     name: 'chest'    
//   },
//   {
//     id: '3 - back',
//     name: 'back'    
//   },
//   {
//     id: '4 - shoulders',
//     name: 'shoulders'    
//   },
//   {
//     id: '5 - arms',
//     name: 'arms'    
//   },
//   {
//     id: '6 - legs',
//     name: 'legs'    
//   },
//   {
//     id: '7 - core',
//     name: 'core'    
//   },
//   {
//     id: '8 - fullBody',
//     name: 'full Body'    
//   },
// ];

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
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="exercise name"
            />
            <label htmlFor="exerciseName">Name :</label>
            
            <select
              onChange={handleFieldChange}
              id="type"
              placeholder="type"
            > 
            <option value="select">select...</option>
            <option value="chest">chest</option>
            <option value="back">back</option>
            <option value="shoulders">shoulders</option>
            <option value="arms">arms</option>
            <option value="legs">legs</option>
            <option value="core">core</option>
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
    </>
  );
};

export default ExerciseForm