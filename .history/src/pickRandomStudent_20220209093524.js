pickRandomStudent = () => {
    
    //call this.setState to update our state
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }))

  }