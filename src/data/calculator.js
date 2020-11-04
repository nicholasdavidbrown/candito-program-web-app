import React, { useState } from 'react';
import logo from '../logo.svg';


function Find1RM(weight, reps) {
    if (reps > 30) reps = 30
    const num = weight * (36 / (37 - reps))
    return 2.5 * Math.ceil(num/2.5)
}

function Calculator() {
      // Declare a new state variable, which we'll call "count"
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [oneRM, setoneRM] = useState(0);

  // Handle functrions
  const handleReps = (event) => {
      setReps(event.target.value)
  }
  const handleWeight = (event) => {
    setWeight(event.target.value)
}
  const handleSubmit = (event) => {
    const temponeRM =  Find1RM(weight, reps)
    setoneRM(temponeRM)
    event.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Calculate your 1 Rep Max
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <h2>I can do</h2>
            <input type="text" value={weight} onChange={handleWeight} /> kg for
        </div>
        <div>
        <input type="text" value={reps} onChange={handleReps} /> reps
        </div>
        <input type="submit" value="Calculate" />
      </form>
        

        <br/>
        <div>
            <h2>Your 1RM is {oneRM} kg</h2>
        </div>
      </header>
    </div>
  );
}

export default Calculator;
