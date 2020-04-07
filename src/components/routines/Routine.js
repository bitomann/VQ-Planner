// import React, { useState, useEffect } from 'react';
// import ApiManager from '../../modules/ApiManager';
// // import { firstLetterCase } from '../../modules/Helpers'
// import './Routine.css'
// // import { Link } from 'react-router-dom';

// const Routine = props => {
//     const [routineExercises, setRoutineExercises] = useState({ name: "" });
//     const [isLoading, setIsLoading] = useState(true);

//     const handleDelete = () => {

//         setIsLoading(true);
//         ApiManager.delete("routineExercises", props.routineExerciseId)
//             .then(() => props.history.push("/routines")
//             );
//     };

//     useEffect(() => {
//         //get(id) from ApiManager and hang on to the data; put it into state
//         ApiManager.getLoggedInUserSavedRoutine("routines", props.routineId)
//             .then(routineExercises => {
//                 setRoutineExercises({
//                     ...routineExercises
//                 });
//                 setIsLoading(false);
//             });
//     }, [props.routineId]);

//     const activeUser = parseInt(sessionStorage.getItem("ActiveId"))

//     return (
//         <div className="card">
//             <div className="card-content">
//                 <picture>
//                     <img src={require(`../images/muscle-icon.svg`)} alt="My Dog" />
//                 </picture>
//                 <h3>Name: <span style={{ color: '#898989' }}>{routineExercises.name}</span></h3>
//                 {/* <ul> 
//                     {routineExercises.map(routineExercises => 
//                    <li key={routineExercises.id}>
//                    <button type="button" disabled={isLoading} onClick={
//                        () => handleDelete(routineExercises.id)}>Remove</button>
//                     {routineExercises.exercise.name}
//                    </li>
//                  )} </ul> */}
                
//                 {/* <ul> 
//                     <li key={routineExercises.id}></li>
//                 </ul> */}
//                 {/* <h3>Name: <span style={{ color: '#898989' }}>{firstLetterCase(routine.name)}</span></h3> */}
//                 {/* <Link to={`/routines`}>
//                     <button>Back</button>
//                 </Link> */}
//                 {/* {activeUser === routine.userId ?
//                     <button type="button" onClick={() => props.history.push(`/routines/${props.routineId}/edit`)}>
//                         Edit
//         </button>
//                     : null} */}
//                 {/* {activeUser === routine.userId ? */}
//                     {/* <button type="button" disabled={isLoading} onClick={handleDelete}> */}
//                         {/* Delete */}
//         {/* </button> */}
//                     {/* : null} */}
//             </div>
//         </div>
//     );
// }

// export default Routine;