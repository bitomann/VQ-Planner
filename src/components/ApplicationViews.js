import { Route, Redirect } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "../components/auth/Login";
import Register from "./auth/Register";

// vvv Exercises vvv //
import ExerciseList from "./exercises/ExercisesList";
import ExerciseDetail from "../components/exercises/ExerciseDetail";
import ExerciseForm from "../components/exercises/ExerciseForm";
import ExerciseEditForm from "../components/exercises/ExerciseEditForm";

// vvv Routines vvv //
// import Routine from "./routines/Routine";

// vvv Profiles vvv //
// import ProfileList from "../components/profile/ProfileList";

// vvv Lexicon??? vvv //


// vvv routes each listed component to the proper URL to be displayed vvv // 
const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <>
    {/* Home */}
      <Route exact path="/" render={props => {
        return <Home />
    }}
      />
    {/* Register */}
      <Route path="/register" render={props => {
            return <Register {...props} />
        }}/>
    {/* Login */}
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
  }} />
      
    {/* Exercises */}
    {/*  vvv Without the 'exact' keyword, the second route would also handle /exercises/:exerciseId vvv   */}
      <Route exact path="/exercises" render={props => {
        if (hasUser) {
        return <ExerciseList {...props} />
        } else {
        return <Redirect to="/login" />
        }
    }}  
      />
      <Route exact path="/exercises/:exerciseId(\d+)" render={props => {
        if (hasUser) {
            // vvv The 'spread operator {...props}' copies all 'props' onto the component's props. vvv
        return <ExerciseDetail exerciseId={parseInt(props.match.params.exerciseId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route path="/exercises/new" render={(props) => {
        return <ExerciseForm {...props} />
    }}
      />           
      <Route path="/exercises/:exerciseId(\d+)/edit" render={props => {
        if (hasUser) {
        return <ExerciseEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />

      {/* Routines */}
       {/* <Route exact path="/routines" render={props => {
        if (hasUser) {
        return <Routine {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      /> */}
     {/* <Route path="/routines/:routineId(\d+)/edit" render={props => {
        if (hasUser) {
        return <RoutineEditForm {...props} />
      } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route exact path="/routines/:routineId(\d+)" render={props => {
        if (hasUser) {
        return <RoutineDetail routineId={parseInt(props.match.params.routineId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route path="/routines/new" render={(props) => {
          return <RoutineForm {...props} />
    }}
      />
      <Route path="/routines/:routineId(\d+)/details" render={(props) => {
          return <RoutineWithExercises {...props} />
    }}
      /> */}

      {/* Profiles */}
      {/* <Route exact path="/profiles" render={props => {
        return <ProfileList {...props} />
    }}
      />
      <Route path="/profiles/new" render={(props) => {
          return <ProfileForm {...props} />
    }}
      />
      <Route path="/profiles/:profileId(\d+)/edit" render={props => {
        if (hasUser) {
        return <ProfileEditForm {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/profiles/:profileId(\d+)"
      render={(props) => {
        return <ProfileDetail profileId={parseInt(props.match.params.profileId)}
       {...props}/>
    }} /> */}
    </>
  );
};

export default ApplicationViews;