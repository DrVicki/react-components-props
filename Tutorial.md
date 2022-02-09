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

  -2. 2. Compose them in the ```App.js``` ```render()``` method. Be sure and delete the default ```<header>``` code.
  
![](https://github.com/DrVicki/react-components-props/blob/main/assets/render-method.png)

  -3. Next, add you 3 components in and save to see the result:

![](https://github.com/DrVicki/react-components-props/blob/main/assets/initial-result.png)

**App.js**
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button'
import Toggle from './Components/Toggle'
import Student from './Components/Student'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Student />
        <Button />
        <Toggle />
      </div>
    );
  }
}

export default App;
```

Next, let’s choose one component to work on. I chose the ```<Student />``` component. A good strategy is to take a look a the properties we need to pass:

  - We need to pass a ```{student}``` object prop from ```<App />``` to the the ```<Student />``` Component and make sure it displays a value from the student object (e.g., it could be an image, but we’ll choose a string in order to make things simple).

![](https://github.com/DrVicki/react-components-props/blob/main/assets/student1.png)
In our ```App.js``` file, pass a student object prop to the ```<Student />``` component


![](https://github.com/DrVicki/react-components-props/blob/main/assets/passed-student.png)
Now, in ```Student.js```, display the passed in student object name prop

  - We choose a ```{student}``` object instead of a string because later on, we want to pass many props to the component (e.g., image, last name, whatever)

That’s all for the Student Component. Next, let’s get the Button working.

Take a look at our incredible app design diagram. We’re going to have all of our functions within the ```<App />``` component, which is the controller in our MVC model. Let’s get to work on the method that will handle when the user presses the button.

![](https://github.com/DrVicki/react-components-props/blob/main/assets/design-model.png)
We’ll focus on pickRandomStudent() for now


### Add our pickRandomStudent() method:

![](https://github.com/DrVicki/react-components-props/blob/main/assets/pickRandomStudent.png)


![](https://github.com/DrVicki/react-components-props/blob/main/assets/design2.png)


![](https://github.com/DrVicki/react-components-props/blob/main/assets/rerender.png)

Now in ```Button.js```, add an ```onClick``` property to a ```button``` element so the ```handleClicked``` property will be executed when there is a ```click``` event.

![](https://github.com/DrVicki/react-components-props/blob/main/assets/buttonjs.png)

Now, test!

![](https://github.com/DrVicki/react-components-props/blob/main/assets/test.png)

Okay, it’s almost working. Instead of working on the Toggle (which is a nice-to-have feature, and may not be as high priority) let’s tackle the data side of the application and cover a critical area of React programming: State.

## What is State?!

To build our prototype correctly, we need to have a place (or way) to store the variables our components need to represent their current state.

Like all programming, the key is **DRY**: Don’t Repeat Yourself. In our diagram above, you’ll notice we have an extra classification called **state** in our ```<App />``` component, but we don’t have any state in any other component (they are called stateless components).

For example, since we are building an application to replace the process of manually using flashcards to call on students, we need a an array of ```{students}``` , as well as the currently picked student, and whether or not we want to randomly choose a student from the whole list, or just those who haven’t been chosen.

Think of all of the pieces of data in our app. We have:

  - A list of students
  - The value of the toggle
  - The currently displayed student
  - The button that chooses a new student

Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:

  1. Is it passed in from a parent via props? If so, it probably isn’t state.
  2. Does it remain unchanged over time? If so, it probably isn’t state.
  3. Can you compute it based on any other state or props in your component? If so, it isn’t state.


### Should this Component have state?

**state is optional**. Since state increases complexity and reduces predictability, a Component without state is preferable. Even though you clearly can’t do without state in an interactive app like the one we’re building, you should avoid having too many Stateful Components. In our app, the Stateful Component is…```<App />```.

### Component types

  - **Stateless Component** — Only props, no state. There’s not much going on besides the ```render()``` function and all their logic revolves around the props they receive. This makes them very easy to follow (and test for that matter).
  - **Stateful Component** — Both props and state. We also call these state managers. They process data and respond to user events. These sort of logistics should be encapsulated in a moderate number of Stateful Components, while all visualization and formatting logic should move downstream into as many Stateless Components as possible. In our application, all of our state is in the ```<App />``` component.

**When should you use props and when should you use state?**

If a Component needs to alter one of its attributes at some point in time, that attribute should be part of its state, otherwise it should just be a prop for that Component.

**The Constructor**

Every component with state needs a constructor method. The ```constructor``` is where we initialize our ```state``` in the component. If you have state, you must have a constructor. Here is how to write this. It is the first thing you declare after your class.

```
//how to create a constructor for your Class
constructor(props) {
   super(props);
   this.state = {
   }
};
```

## The State of Our State

Recall our incredibly professional application architecture diagram. In our state, we have the following:
 
  - ```Students[]``` — This is an array of student objects (e.g., just the name, image for now)
  - ```pickFromAll``` — This is a bool that indicates whether we pick totally randomly or from those who haven’t been chosen
  - ```pickedStudent``` — This is the student object returned from our pickRandomStudent() method.

![](https://github.com/DrVicki/react-components-props/blob/main/assets/design3.png)

Here is our constructor;

![](https://github.com/DrVicki/react-components-props/blob/main/assets/consructor.png)
```this.state``` is an object!

## this.state

Notice that ```this.state``` is an object. In our case, it is an object with 3 values:

  1. an array of ```students``` **objects**
  2. a ```pickFromAll``` **boolean**
  3. a ```pickedStudent``` null

Because ```this.state``` is in the constructor function of our component, it will be initialized as soon as the component renders to the screen.

Let’s see if we can pass the ```<Student />``` component our ```pickedStudent``` object from the``` <App />```’s state.

We want our student object prop passed from the ```<App />```  to represent the current picked student (which is null right now). This ensures that our ```<Student />``` is able to read from the state held in our ```<App />``` component.

In our ```App.js``` ```render()``` function, change the prop passed to ```<Student />``` to be: ```{ this.state.pickedStudent }```

![](https://github.com/DrVicki/react-components-props/blob/main/assets/render2.png)

Notice that instead of ```this.props``` we are using ```this.state```  to tell React we want to read from the state of the current component, which is managed by our Controller (e.g., ```App.js```).

