import React, { useState } from "react"
import { Link } from "react-router-dom";
import ApiManager from "../../modules/ApiManager";

const Login = props => {
  const [credentials, setCredentials] = useState({ userName: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials }
    stateToChange[evt.target.id] = evt.target.value
    setCredentials(stateToChange)
 }

  const handleLogin = (evt) => {
    evt.preventDefault()
    if (credentials.userName === "" || credentials.password === "") {
        window.alert("Please input a username and password")
    } else {
        // Checks if the credentials entered by user in input fields matches any user objects in the DB, if so then saves that 
        // user's id to sessionStorage and redirects back to home page.
        ApiManager.getAll("users").then(users => {
            if (users.find(user => user.userName === credentials.userName) && users.find(user => user.password === credentials.password)) {                    
                const user = users.find(user => user.userName === credentials.userName)

                sessionStorage.setItem(
                    "Active Id", 
                    JSON.stringify(user.id)
                )
                props.history.push("/home")

                
            } else {
                window.alert("Invalid userName or password.")
            }
        })   
    }
 }

  return (

    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in :</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="text"
            id="f3name"
            placeholder="F3 name..."
            required="" autoFocus="" />
          <label htmlFor="inputF3name">F3 Name :</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="password"
            required="" />
          <label htmlFor="inputPassword">Password :</label>
          {/* TODO:add 'remember me' checkbox */}
        </div>
        <button className="margin" color="success" type="submit" onClick={handleLogin}>Sign In</button>
        <p><Link className="center" to="/register">Don't have an account? Click Here To Register!</Link>
            </p>
      </fieldset>
    </form>
  );
};

export default Login;