
## chap - 1 ## 
## Topic - jsx , Turnery operator

What is jsx 
Ans - 
1. JSX stands for JavaScript XML.

2. JSX allows us to write HTML in React.

3. JSX makes it easier to write and add HTML in React.


--------------------

🔗 Rule no :- 1
Html code must wrap into one top level element (Parents element )

function App(){
     return(
         <>
         <h1>Hello world</h1>
         <p>Rule no :- 1</p>
         </>
     )
 }
 RESULT
Hello world
Rule no :- 1


🔗 Rule no :- 3
class = className
class not use in Jsx because class already present in jsx in the form of reserve keyword.
function App(){
     return(
         <>
         <h1>Hello world</h1>
         <p>Rule no :- 3</p>
         </>
     )
 }
 RESULT

Hello world
Rule no :- 3

🔗 Rule no :- 4
No if else condition inside Jsx but ternary operator is okay
function App(){
    const x = 10;
    return(
        <>
        <h1>Hello world!</h1>
        <p>Rule no:-4</p>
        <p>{(x)>15? "Greater": "smaller"} </p>
        </>
    )
 }
 RESULT

Hello world!
Rule no:-4

smaller

Example of turnery operator

import './App.css';

function App() {
  const a = 10 ;
  return (
    <div className="App">
       {(a<12) ? 'Greater' : 'smaller'}
    </div>
  );
}

export default App;

------------------------------------------------------------------------------------------







### --------------------- Chap 2  --------------------------- ##

## Topic - React Component

Q. What is component
Ans - 1. React component is a type of function that returns HTML elements.

2. React component is called the building block of react js. Because it 
creates userfrinedly and attractive div, section or container to show 
any content in a proper format.

3. React components are used to create different types of independent, 
resuable sections and UI (User Interface).

Q. Types Of Components
Ans -
1. Class Component
2. Function Components

-------------------------------------------
🔗 1. Class Component
Class component is a user defined class of javascript. Which is made with the render() method to return the HTML content.

//Create a Class component called ClassComponent
class ClassComponent extends React.Component {
render() {
    return <h2>Hi, I am a Class Component!</h2>;
 }
}

// Hi, I am a Class Component!

--------------------------------------------

🔗 2. Function Component
A functional component is a user friend function of JavaScript that returns HTML content.
A Function component also returns HTML, and behaves much the same way as a Class component,
but Function components can be written using much less code, are easier to understand.

🔗 How To Create Components
Filename must start with an uppercase character.

import React from "react";

function Navbar(){
     return(
         <>
         <h1>Hello world</h1>
         <p>How are you </p>
         <Car/>
         </>
     )
 }
export default Navbar;


* component example

## ------- App.js ------------------##
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;

## --------------  Navbar.jsx -------------## 
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar



🔗 Components in Components

import React from "react";

function Navbar(){
     return(
         <>
         <h1>Hello world</h1>
         <p>How are you </p>
         <Car/>
         </>
     )
 }
export default App;

// second components
function Car() {
  return <h2>I am a Car!</h2>;
}

## ------- Chap 2 End --------------------------- ##





## ----------- chap-3  ------------ ##
## Topic - React Props

🔗 Props in React
1. Props stand for properties.
2. Props are used to transfer data from one components to another components.
3. Props are read only.
4. Props are just like a function in Jsx.

🔗 Example 1 :
🔗 Step 1: Create a components ChildComponent1.jsx
- components
  - ChildComponents1

🔗 Step 2: App.jsx
Send Props Parent to child
import React from 'react'
import ChildComponent1 from './components/ChildComponent1';

function App() {
  const name = "Kamal Nayan Upadhyay";

  return (
    <div className='main'>
      <div className="">
      <ChildComponent1 name={name}/>
      </div>
    </div>
  )
}

export default App

🔗 Step 3: ChildComponents1.jsx
Receive Props
There are Two way to receive props:

🔗 Example 1:
Way 1:
import React from 'react'

function ChildComponent1(props) {
    // console.log(props)
    return (
        <div>
            <div className="text">
            <h1>Name : {props.name}</h1>
            </div>
        </div>
    )
}

export default ChildComponent1

Way 2:

import React from 'react'

function ChildComponent1({name}) {
    // console.log(props)
    return (
        <div>
            <div className="text">
            <h1>Name : {name}</h1>
            </div>
        </div>
    )
}

export default ChildComponent1



## Example - How to pass props from parent to child 

----------------  1 - way   --------------------
App . js

import './App.css';
import ChildComponents1 from './component/ChildComponents1';

function App() {
  const name ="omprakash"
  return (
    <div className="App">
      <ChildComponents1 name={name}/>
    </div>
  );
}

export default App;

ChildComponents1.jsx
import React from 'react'

const ChildComponents1 = (props) => {
  // console.log(props);
  return (
    <div>
    <h1>{props.name}</h1>
    </div>
  )
}

export default ChildComponents1

----------  2 - way ---------------

ChildComponents1.jsx

import React from 'react'

const ChildComponents1 = ({name}) => {
  // console.log(props);
  return (
    <div>
    <h1>Name: {name}</h1>
    </div>
  )
}

export default ChildComponents1


-----------------------------------

🔗 Example 2:
🔗 Step 1: Create a components ChildComponent2.jsx

 ## -----App.js --------

import './App.css';
import ChildComponents1 from './component/ChildComponents1';
import ChildComponents2 from './component/ChildComponents2';

function App() {
  const name ="omprakash"
  const greet = ()=>{
    alert("Hello i am om")
  }
  return (
    <div className="App">
      <ChildComponents1 name={name}/>
      <ChildComponents2 greet={greet}/>
    </div>
  );
}

export default App;


ChildComponents1.jsx

import React from 'react'

const ChildComponents1 = ({name}) => {
  // console.log(props);
  return (
    <div>
    <h1>Name : {name}</h1>
    </div>
  )
}

export default ChildComponents1

## ChildComponents2.jsx

import React from 'react'
const ChildComponents2 = ({greet}) => {
  return (
    <div>
    <button onClick={greet}>Click me</button>
    </div>
  )
}

export default ChildComponents2


## ------------------  chap - 3 End   -------------------- ##




## -------------- Chap - 4 ------------------------- ##
## Topic - React Event 

Example 

import './App.css';


function App() {
  // const name ="omprakash"
  const greet = ()=>{
    alert("Hello i am om")
  }
  return (
    <div className="App">
      <button onClick={greet}>Click</button>
    </div>
  );
}

export default App;




## ----------------- chap - 4 End ----------------------- ##


## -------------- Chap - 5 --------------------- ##
## Topic - React js Conditional Rendering 

✍️👋 React Conditional Rendering
In React, you can conditionally render components.
There are several ways to do this.

1. if Statement
2. Logical && Operator
3. Ternary Operator

🔗 if Statement
We can use the if JavaScript operator to decide which component to render.
Example:
We'll use these two Pages:

function Login() {
  return <h1>Login Page</h1>;
}

function Home() {
  return <h1>Home Page</h1>;
}

Example:
Now, we'll create another component that chooses which component to render based on a condition:
Try changing the isAuth attribute to false :

import React from 'react'

function App(props) {
  const isAuth = false;
  if (isAuth) {
    return <Login />;
  }
  return <Home />;
}

export default App


🔗 Logical && Operator
Another way to conditionally render a React component is by using the && operator.

import React from 'react'

function App() {
 const fruits = ['Apple', 'Banana', 'Orange'];
  return (
   <>
    <div>Fruits</div>
    {fruits.length > 0 && 
      <h2>You have {fruits.length} fruits in your store.</h2>}
   </>
  )
}

export default App



🔗 Ternary Operator
Another way to conditionally render elements is by using a ternary operator.

condition ? true : false

Example:
if isAuth is true, otherwise return the Home  Page:
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  const isAuth = true;
  
  return (
    <>
    <h1>Welcome To devknus</h1>
    {isAuth ? <Home/> : <Login/>}
    </>
  )
}

export default App

 


## -------------- Chap - 5 End --------------------- ##

## --------------- Chap - 6 ------------------------ ##
## Topic - React Lists Rendering

✍️👋 React Lists Rendering
1. Lists in React are same as the lists in JavaScript/HTML.

2. We can use lists to show multiple items in a structured manner.

3. We can use lists for displaying menu, navigation bar etc.

4. To display a list, we can use map() method of an array.

🔗 Basic HTML/JS List

<ul>
     <li>Item 1</li>
     <li>Item 2</li>
     <li>Item 3</li>
</ul>

🔗 React List
import React from 'react'

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <ul>
        {items.map((value)=>{
          console.log(value)
          return  <li>{value}</li>
        })}
      </ul>
    </div>
  )
}
export default App


🔗 map()
An example of map:
function App() {
  const languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'C#'];

  return (
    <div className="p-2">
       <div className="App">
      {languages.map((language) => {
        return <div>I learn {language}</div>
      })}
    </div>
    </div>
  )
}

// Output

// I learn JavaScript
// I learn Python
// I learn Java
// I learn C
// I learn C++
// I learn C#



🔗 Lists
When we run this React List code, we will be given a warning that

"Each child in a list should have a unique 'key' prop"

🔗 Keys
1. A "key" is a special string attribute you need to include when 
creating lists of elements.

2. Keys help React identify which items have changed, added or deleted.

3. If you choose not to assign an explicit key to list items then React will
default to using indexes as keys. You will get a warning in this case.

function App() {
  const languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'C#'];

  return (
    <div className="p-2">
       <div className="App">
      {languages.map((language, index) => {
        return <div key={index}>I learn {language}</div>
      })}
    </div>
    </div>
  )
}

export default App



Example:
import React from 'react'

const skills = [
  { id: 1, skill: 'JavaScript' },
  { id: 2, skill: 'Python' },
  { id: 3, skill: 'Java' },
  { id: 4, skill: 'C' },
  { id: 5, skill: 'C++' },
  { id: 6, skill: 'C#' },
  { id: 7, skill: 'Html' },
  { id: 8, skill: 'Css' },
  { id: 9, skill: 'Bootstrap' },
  { id: 10, skill: 'Tailwind Css' },
  { id: 11, skill: 'Material ui' },
  { id: 12, skill: 'React Js' },
  { id: 13, skill: 'Next Js' },
  { id: 14, skill: 'Angular Js' },
  { id: 15, skill: 'Vue Js' },
  { id: 16, skill: 'React Native' },
  { id: 17, skill: 'Dart' },
  { id: 18, skill: 'Flutter' },
  { id: 19, skill: 'Github' },
  { id: 20, skill: 'Electron Js' },
];

function App() {
  return (
    <div>
      {skills.map((value,index)=>{
        // console.log(value)
        const {skill,id}= value 
        return(
          <h1 key={index}>{id}. {skill}</h1>
        )
      })}
    </div>
  )
}

export default App

## my example 
import './App.css';
function App() {
  const myList =["om1", "om2", "om3"]
  return (
    <div>
     {myList.map((val, index)=>{
      return(
        <li key={index}>{val}</li>
      )
     })}
    </div>
   
  );
}

export default App;



import './App.css';
function App() {
  const skills = [
    { id: 1, skill: 'JavaScript' },
    { id: 2, skill: 'Python' },
    { id: 3, skill: 'Java' },
    { id: 4, skill: 'C' },
    { id: 5, skill: 'C++' },
    { id: 6, skill: 'C#' },
    { id: 7, skill: 'Html' },
    { id: 8, skill: 'Css' },
    { id: 9, skill: 'Bootstrap' },
    { id: 10, skill: 'Tailwind Css' },
    { id: 11, skill: 'Material ui' },
    { id: 12, skill: 'React Js' },
    { id: 13, skill: 'Next Js' },
    { id: 14, skill: 'Angular Js' },
    { id: 15, skill: 'Vue Js' },
    { id: 16, skill: 'React Native' },
    { id: 17, skill: 'Dart' },
    { id: 18, skill: 'Flutter' },
    { id: 19, skill: 'Github' },
    { id: 20, skill: 'Electron Js' },
  ];
  return (
    <div>
     {skills.map((val, index)=>{
      // console.log(val);
      const {skill, id} = val
      return(
        <h1 key={index}>{id} . {skill}</h1>
      )
     })}
    </div>
   
  );
}

export default App;






## --------------- Chap - 6 End  ------------------------ ##


## --------------- Chap - 7   -------------------------- ##
##  Topic - React Router v6

✍️👋 React Router
🔗 Step 1 : Add React Router
To install React router, run this in your terminal:

npm i react-router-dom

🔗 Step 2: Creating Multiple Pages
We'll create the following Home, About, Contact, and Nopage pages like this:


src/pages/Home.jsx
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;


src/pages/About.jsx
import React from 'react'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default About


src/pages/Contact.jsx
import React from 'react'

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    )
}

export default Contact



src/pages/NoPage.jsx
import React from 'react'

function NoPage() {
    return (
        <div>
            <h1>This is the noPage page</h1>
        </div>
    )
}

export default NoPage



🔗 Step 3: Define routes in App.jsx
1. Import BrowserRouter as Router, Route, Routes, from react-router-dom

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



🔗 Complete Code

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoPage from "./pages/NoPage"


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App


🔗 Step 4: Create a Navbar

- components
  - Navbar.jsx

import React from 'react'
function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

🔗 Css Code For Navbar

* {
    margin: 0;
    padding: 0;
}

.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgb(0, 78, 78);
}

.logo_text{
    color: white;
}

ul {
    display: flex;
    gap: 20px;
    color: white;
}

li {
    list-style: none;
}
a{
    text-decoration: none;
    color: white;
}
a:hover{
    color: wheat;
}

🔗 Step 5: Import Navbar.jsx in App.jsx

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App



🔗 Step 6: Use Link to navigate to routes
go to Navbar.jsx
The Link component is similar to the anchor element (<a>) in HTML. Its to attribute specifies which path the link takes you to. Always remember to import Link from react-router-dom before using it.

import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <Link to={'/home'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar



🔗 Step 7: Move One Page To Another (useNavigate hook)
In this example, we will use useNavigate() hook to navigate to the about page and to go back to the home page. From the following code, the user can go back to the Home page from the About page on the button click.


src/pages/Home.jsx

import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
    
return (
    <>
        <h1>Home Page</h1>
        <button onClick={()=>navigate("/about")}>Go to About</button>
    </>
)
};

export default Home;


src/pages/About.jsx

import React from 'react';
import {useNavigate} from "react-router-dom"
  
const About = () => {
  const navigate = useNavigate();
  
  return (
  <>
     <h1>About Page</h1>
     <button onClick={()=>navigate(-1)}>Go Back Home</button>
  </>
  )
};
  
export default About;



🔗 Step 8: ReactJS useParams Hook
The useParams() hook is a React Router hook that allows you to access the parameters of the current URL. This can be useful if you want to dynamically render content based on the URL parameters. For example, if you have a blog application, you may want to render different articles based on the article ID in the URL

1.Create a Blog Page

import React from 'react'

function Blog() {
  return (
    <div>App</div>
  )
}

export default Blog

2. Define Route
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import NoPage from "./pages/NoPage"

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/blog/:id" element={ <Blog/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App

3. Navbar.jsx

import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
          <Link to={'/home'}><li>Home</li></Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
          <Link to={'/blog'}><li>Blog</li></Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

## Receive Parameter

import React from 'react'
import { useParams } from 'react-router-dom';

function Blog() {
    const { id } = useParams();
  return (
    <div>Blog Id : {id}</div>
  )
}

export default Blog









## --------------- Chap - 7 End  -------------- ##








