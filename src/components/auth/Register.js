import React, { useState } from "react"
// import {Card, Button, Label, Input } from 'reactstrap'
import { Link } from "react-router-dom"
import ApiManager from "../../modules/ApiManager"
import "../auth/Login.css"

const Register = props => {
    const [credentials, setCredentials] = useState({userName: "", password: "", confirmPassword: ""})
    const [isLoading, setIsLoading] = useState(false)


    const handleFieldChange = evt => {
        const stateToChange = {...credentials}
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    }

    const handleRegister = evt => {
            evt.preventDefault()
        if (credentials.userName === "" || credentials.password === "" || credentials.confirmPassword === "") {
            window.alert("Please input a F3 Name and Password.")
        } else if (credentials.password !== credentials.confirmPassword) {
            window.alert("Passwords do not match.")
        } else {
            // checks if userName that user entered in field (credentials) matches userName in the DB
            ApiManager.getAll("users").then(users => {
                if (users.find(user => user.userName === credentials.userName)) {
                    window.alert("This F3 Name already exists.")
                } else {
                const newUser = {
                    userName: credentials.userName,
                    password: credentials.password
                }
                setIsLoading(true)

                ApiManager.post("users", newUser)
                .then(() => {
                    ApiManager.getAll("users").then(users => {
                        const activeUser = users.find(user => user.userName === newUser.userName)

                        sessionStorage.setItem(
                            "ActiveId", 
                            JSON.stringify(activeUser.id)
                        )
                        props.history.push("/")
                    })
                })
                }
            })    
        }
    }

    return (
        
       <div className="flex">
       {/* <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}> */}
        <form onSubmit={handleRegister}>
            <fieldset>
                <h2>Register :</h2>
                <div className="formgrid">
                    <label htmlFor="userName">F3 Name :</label>
                    <input onChange={handleFieldChange} type="userName" id="userName" 
                    placeholder="F3 Name..." required="" autoFocus="" className="padding"></input>

                    <label htmlFor="inputPassword">Password : </label>
                    <input onChange={handleFieldChange} type="password" id="password" 
                    placeholder="Password..." required=""></input>

                    <label htmlFor="confirmPassword">Confirm Password :</label>
                    <input onChange={handleFieldChange} type="password" id="confirmPassword" 
                    placeholder="Confirm Password..." required=""></input>
                </div>
                <button className="margin" color="success" type="submit" disabled={isLoading} >Register</button>
                <p><Link className="center" to="/login">Already have an account? Login here.</Link></p>
            </fieldset>
        </form>
        {/* </Card> */}
        </div>
    )
}

export default Register