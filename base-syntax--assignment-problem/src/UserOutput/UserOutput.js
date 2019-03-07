import React from 'react';

// importing css file so that the styles in it could be lik=nked to this component.
import './UserOutput.css';

//ES6 syntax of functional component
const userOutput = (props) => {
    const outputStyle = {
        padding: '2px light red',
        font: 'Algeria'
    };
    return (
        <div>
            <h3>And I am the UserOutput component!</h3>
            <p className="bla" >blablablablablablablablablablablablablablablablablablablablablabla!!
               blablablablablablablablablablablablablablablablablablablablablabla!!
               blablablablablablablablablablablablablablablablablablablablablabla!!
            </p>
            <p style={outputStyle} onClick={props.click}>Hellooo {props.userName}! I am Bruce. The shark.</p>
        </div>
    )
}

// Used to export this func so it could be imported anywhere
export default userOutput;