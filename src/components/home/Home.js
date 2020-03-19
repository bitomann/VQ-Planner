import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="center">
            <h1 className="centerMe">VQ-Planner</h1>
            <section>
            <img id="dice" src={require("../images/cross-hair-dice.png")} alt="f3 logo"></img>
            <label id="randomQ" >Random VQ</label>
            </section>
        </div>
    )
}

export default Home