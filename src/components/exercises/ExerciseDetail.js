import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import {firstLetterCase} from '../../modules/Helpers'
import './ExerciseDetail.css'

const ExerciseDetail = props => {
  const [exercise, setExercise] = useState({ name: "", type: "", description: "" });
  const [isLoading, setIsLoading] = useState(true);

  // vvv invoke the delete function in ExerciseManger and re-direct to the ExerciseList. vvv
const handleDelete = () => {
//   isLoading is a boolean value that will indicate whether or not the component 'is loading'. 
//   A value of true will disable the button and a value of false will enable it. By putting 
//   isLoading in the component's state, we can trigger a re-render by changing its value.
setIsLoading(true);
ApiManager.delete("exercises", props.exerciseId)
.then(() => props.history.push("/exercises")
);
};

useEffect(() => {
    //get(id) from ApiManager and hang on to the data; put it into state
    ApiManager.getOne("exercises", props.exerciseId)
    .then(exercise => {
        setExercise({
            // name: exercise.name,
            // type: exercise.type,
            // description: exercise.description,
            // userId: exercise.userId 
            ...exercise
        });
        setIsLoading(false);
    });
}, [props.exerciseId]);

const activeUser = parseInt(sessionStorage.getItem("ActiveId"))

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require(`./dogImages/${exercise.description}`)} alt="My Dog" /> */}
          <img src={require(`../images/muscle-icon.svg`)} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: '#898989' }}>{firstLetterCase(exercise.name)}</span></h3>
        <h5>Type: {firstLetterCase(exercise.type)}</h5>
        <h5>Description: {firstLetterCase(exercise.description)}</h5>
        {activeUser === exercise.userId ? 
        <button type="button" onClick={() => props.history.push(`/exercises/${props.exerciseId}/edit`)}>
        Edit
        </button>
        : null}
        {activeUser === exercise.userId ? 
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        Delete
        </button>
        : null}
      </div>
    </div>
  );
}

export default ExerciseDetail;