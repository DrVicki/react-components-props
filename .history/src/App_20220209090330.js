import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Toggle from './Components/Toggle';
import Student from './Components/Student';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {  }
  }

  //pick a random student
  pickRandomStudent = () => {
    alert('a random student has been picked');
  }
  render() {
    return (
      <div className="App">
        <Student student={{name: 'Vicki Bealman'}} />
        <Button handleClicked={this.pickRandomStudent} />
        <Toggle />
      </div>
    );
}
}

export default App;
