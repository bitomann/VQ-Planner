import React from "react";
// import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/Helpers'
import "./ExerciseCard.css";

const ExerciseCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* vvv this follows the path to the "imageUrl" in the JSON file. path needs to be from the 
          same level as the folder. In turn renders a unique image on each card vvv */}
          {/* <img src={require(`./dogImages/${props.exercise.imageUrl}`)} alt="My Dog" /> */}
          <img src={require(`../images/muscle-icon.svg`)} alt="Flexing Arm" />
        </picture>
        {/* vvv pulls in props from ExerciseList vvv */}
            {/* TODO: vvv figure out why 'exercise' is undefined */}
        <h3 className="name">Name: <span className="card-exerciseName">
          {/* {firstLetterCase(props.exercise.name)} */}
        </span></h3>
        <p>Description: Click details for a closer look...</p>
        <p>Type: muscle group</p>
        {/* <p>Type: {firstLetterCase(props.exercise.type)}</p> */}
        {/* <p>Type: {props.exercise.type}</p> */}
        {/* <Link to={`/exercises/${props.exercise.id}`}> */}
        <button>Details</button>
        {/* </Link> */}
        <button type="button" onClick={() => props.history.push(`/exercises/${props.exercise.id}/edit`)}>
        Edit
        </button>
        <button type="button" onClick={() => props.deleteExercise(props.exercise.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ExerciseCard