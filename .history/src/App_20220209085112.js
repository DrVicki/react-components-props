import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Toggle from './Components/Toggle';
import Student from './Components/Student';
import { Component } from 'react';

class App extends Component {

  //pick a random student
  pickRandonStudent = () => {
    alert('a random student has been picked');
  }
  render() {
    return (
      <div className="App">
        <Student student={{this.pickRandomStudent}} />
        <Button handleClicked={} />
        <Toggle />
      </div>
    );
}
}

export default App;
