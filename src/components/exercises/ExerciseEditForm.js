import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import "../exercises/ExerciseForm.css";

const ExerciseEditForm = props => {
  const [exercise, setExercise] = useState({ name: "", type: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...exercise };
    stateToChange[evt.target.id] = evt.target.value;
    setExercise(stateToChange);
  };

  const updateExistingExercise = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // Need the id for 'edit'!
    const editedExercise = {
      id: props.match.params.exerciseId,
      name: exercise.name,
      type: exercise.type,
      description: exercise.description,
      userId: parseInt(sessionStorage.getItem("ActiveId"))
    };

    ApiManager.update("exercises", editedExercise)
      .then(() => props.history.push("/exercises"))
  }

  useEffect(() => {
    ApiManager.getOne("exercises", props.match.params.exerciseId)
      .then(exercise => {
        setExercise(exercise);
        setIsLoading(false);
      });
  }, [props.match.params.exerciseId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={exercise.name}
            />

            <label htmlFor="type">Type :</label>
            <select
              type="text"
              required
              onChange={handleFieldChange}
              id="type"
              placeholder="type"
            //   disabled="true"
            > 
            <option value="chest">chest</option>
            <option value="back">back</option>
            <option value="shoulders">shoulders</option>
            <option value="arms">arms</option>
            <option value="legs">legs</option>
            <option value="fullBody">full body</option>
            </select>

            <label htmlFor="description">Description :</label>
            <textarea rows="4" cols="50"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="description"
              value={exercise.description}
            />
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingExercise}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default ExerciseEditForm