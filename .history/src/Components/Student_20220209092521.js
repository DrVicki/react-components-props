//here is a boilerplate component structure
import React, { Component } from 'react';


class Student extends Component {
    state = { }
    
   render() {
      return (  
          <div>{this.props.student.nam}</div>
      );
   }
}

export default Student ;