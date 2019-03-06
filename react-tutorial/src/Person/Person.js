import React from 'react';

//ES6 syntax of functional component
const person = (props) => {
    return (
        <div>
            {/* using props give access to all the attributes. */}
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

// Used to export this func so it could be imported anywhere
export default person;