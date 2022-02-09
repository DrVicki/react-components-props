//here is a boilerplate component structure
import React, { Component } from 'react';


class Student extends Component {
    
    
   render() {
      return (  
          <div>{this.props.student && this.props.student.name}</div>
      );
   }
}

export default Student ;