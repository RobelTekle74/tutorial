import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import './Person/Person.css'

class App extends Component {
  state = {
    persons: [
      {id: 'aks', name: 'Robel', age: 28},
      {id: 'KJS', name: 'Fasika', age: 26},
      {id: 'akl', name: 'Dembitayte', age: 26}
    ],
    showPersons: false
  }

  // switchNameHandler = ( ) => {
  //   // console.log('was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Abu';
  //   this.setState({
  //     persons: [
  //       {name: 'Abu', age: 27},
  //       {name: 'Fasika', age: 25},
  //       {name: 'Dembituka', age: 25}
  //     ]
  //   })
  // }

  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name =event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( {persons: persons} );
  }

   deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      //  an alternate solution for the above approach is by using the spread operator.
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // define a style variable that could be used inside the function.
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          {/* <Person 
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
            age = {this.state.persons[2].age}
            changed={this.nameChangedHandler}>
            Description: Fasika's nose!
          </Person> */}
        </div> 
      );
    }
    // 'this' reffers to the class that we are in.
    return (
      <div className="App">
          <h1>What up Daaaaaaaawwwwgggg!</h1>
          <p>You know this shit going to be <strong>LITT!</strong></p>
          
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* the persons in the {} reffers to the persons variable */}
          {persons}
      </div>
    );
  }
}

export default App;
