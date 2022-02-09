# TUTORIAL React — Components, Props, State

In this virtual lab, we’re going to make a simple React application with state and three components which pass props to each other. 

We’re going to build a simple app to help me randomly choose a student to call on in class. Here’s a super professional wire frame depicting our application’s components:

![](https://github.com/DrVicki/react-components-props/blob/main/assets/1_k9P07apGEikyXC5RAs7ylA.png)

We have a master component called ```<App />``` which will act as our model and controller (in the MVC relationship). Within the app, we’ll have 3 components:

  - ```<Student />``` component, a ```<Button />``` component and a ```<Toggle />``` component.
  - Our ```<Button / >``` component will be a ```<button></button>``` that takes in a property, which is a method in our ```<App />``` component to return a random object (name, image, etc…)
  - The ```<Toggle />``` component will be a toggle, which will toggle the state of the button component to either exclude previously generated random numbers, or include them.

## Create React App

First, we’ll need to create our React app. ```npx create-react-app yourname```.

## Design and Plan Your UI

For this exercise, we’ll build a very simple nested structure, where the parent component is simply an empty ```<App />``` container, and the children are the ```<Student />``` and ```<Button />``` components.

![](https://github.com/DrVicki/react-components-props/blob/main/assets/1_k9P07apGEikyXC5RAs7ylA.png)

Our render method renders the ```<App />``` component, which then renders the ```<Student />``` and ```<Button />``` components.

In our Model-View-Controller (MVC) model, here’s what we have:
  - **Model**: App.js
  - **View**: Our 3 Components
  - **Controller**: App.js

# Design Your Components, Properties and Methods

Below is our wireframe with the addition of the properties and methods we’d like to have within each component. This activity is normally very helpful before you start to program anything, it helps you to compartmentalize and plan. During this phase, ask yourself the following questions:

  1. Where is my state (e.g., your variables that you’d like to have available to your components)? The interactivity in every React component is related to its ```state```. ```state``` determines how that component renders & behaves. In other words, state is the thing that allows you to create components that are dynamic and interactive.
  2. What types of properties do I need to pass into this component?
  3. Where should my methods be location?

To decide if you should create a new function or object, it’s useful to use the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle); a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

![](https://github.com/DrVicki/react-components-props/blob/main/assets/breakdown.png)

Here’s the breakdown of our components, their props, state and methods.

### <App />

  - **Props**: none
  - **State**:
    - ```students[{}]``` — array of objects
    - ```pickFromAll``` — bool
    - ```pickedStudent``` —object index of students array

**Methods**:

  - ```pickRandomStudent()``` — a method that will return a random student
  - ```togglePickingStrategy()``` — a method to toggle our pickFromAll boolean
  - ```render()``` — this component will render the 3 other components

### <Student />

   - **Props**:
    - ```{student}```
  - **State**:
    - none

**Methods**:
  - ```render()``` — this component will render the student component

## <Button />

  - **Props**:
    - ```handleClicked``` — this property will pass the pickRandomStudent prop from our ```<App />``` component down to the ```<Button />```
 - **State**:
    - None

**Methods**:
  - ```render()``` — this component will render the button component

## <Toggle />

  - **Props**:
    - ```handleToggled``` — handles whether our toggle is on or off
  - **State**:
    - None

**Methods**:
  - ```render()``` — this component will render the toggle component

# Create Your Components

Now it’s time to create our components. Make sure VSCode is open to the root of your project and you’ve successfully run ```npm start``` after ```create-react-app yourappname```

![](https://github.com/DrVicki/react-components-props/blob/main/assets/create.png)

![](https://github.com/DrVicki/react-components-props/blob/main/assets/create2.png)
  - Create a new folder and make your components as separate ```.js``` files.

Next, copy some skeleton (boilerplate code to create your components, this saves some typing)

**React Boilerplate for creating a component**

```
//here is a boilerplate component structure
import React, { Component } from 'react';
class YourClassName extends Component {
   constructor(props) {
     super(props)
       this.state = {  }
   }
   render() {
      return (  );
   }
}
export default YourClassName ;

```

Use this boilerplate to get your basic components to render to the screen. Our first goal is simply to make sure each is composed properly.

Since we now have our component hierarchy, it’s time to implement our app in the easiest way possible, which is to build a version that renders the UI but has no interactivity. It’s best to decouple the interactive and static display processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing.

**Button.js**
```
import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return (  
            <div>Button</div>
        );
    }
}
 
export default Button ;
```

**Toggle.js**
```
import React, { Component } from 'react';

class Toggle extends Component {
    state = {  }
    render() { 
        return (  
            <div>Toggle</div>
        );
    }
}
 
export default Toggle ;
```

**Student.js**
```
import React, { Component } from 'react';

class Student extends Component {
    state = {  }
    render() { 
        return (  
            <div>Student</div>
        );
    }
}
 
export default Student ;
```

Next, compose them in the main ```<App />``` component in ```App.js```

  1. Import the Components at the top of your ```App.js``` file

![](https://github.com/DrVicki/react-components-props/blob/main/assets/import%20components.png)





