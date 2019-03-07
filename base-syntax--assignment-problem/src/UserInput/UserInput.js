import React from 'react';

//ES6 syntax of functional component
const userInput = (props) => {
    return (
        <div>
            <h2>Hi I am the UserInput component!</h2>
            <input type="text" onChange={props.change} value={props.userName} />
        </div>
    )
}

// Used to export this func so it could be imported anywhere
export default userInput;