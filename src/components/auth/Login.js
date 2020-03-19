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
        window.alert("Please input your F3 Name and Password")
    } else {
        // Checks if the credentials entered by user in input fields 
        // matches any user objects in the DB, if so then saves that 
        // user's id to sessionStorage and redirects back to home page.
        ApiManager.getAll("users").then(users => {
            if (users.find(user => user.userName === credentials.userName)
            && users.find(user => user.password === credentials.password)) {                    
                const user = users.find(user => user.userName === credentials.userName)

                sessionStorage.setItem(
                    "ActiveId", 
                    JSON.stringify(user.id)
                )
                props.setUser()
                props.history.push("/")

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
            id="userName"
            placeholder="F3 name..."
            required="" autoFocus="" />
          <label htmlFor="userName">F3 Name :</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="password"
            required="" />
          <label htmlFor="password">Password :</label>
          <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberMe"/>
            <label htmlFor="rememberMe">Remember Me :</label>       
        <button className="margin" color="success" type="submit" onClick={handleLogin}>Sign In</button>
        </div>
        <p><Link className="center" to="/register">Don't have an account? Click Here To Register!</Link>
            </p>
      </fieldset>
    </form>
  );
};

export default Login;