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

