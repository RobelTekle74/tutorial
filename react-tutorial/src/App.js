import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Robel', age: 28},
      {name: 'Fasika', age: 26},
      {name: 'Dembitayte', age: 26}
    ]
  }

switchNameHandler = ( ) => {
  // console.log('was clicked!');
  // DON'T DO THIS: this.state.persons[0].name = 'Abu';
  this.setState({
    persons: [
      {name: 'Abu', age: 27},
      {name: 'Fasika', age: 25},
      {name: 'Dembituka', age: 25}
    ]
  })
}

reverseNameHandler = () => {
  this.setState({
    persons: [
      {name: 'Robel', age: 28},
      {name: 'Fasika', age: 26},
      {name: 'Dembitayte', age: 26}
    ]
  })
}

  render() {
    return (
      <div className="App">
          <h1>What up Daaaaaaaawwwwgggg!</h1>
          <p>You know this shit going to be <strong>LITT! <Person /> </strong></p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          {/* 'this' reffers to the class that we are in. */}
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age} 
          />
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} click={this.reverseNameHandler}>
            My hobbies: Talking, Talking and Talking!
          </Person>
          <Person 
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}>
            Description: Fasika's nose!
          </Person>
      </div>
    );
  }
}

export default App;
