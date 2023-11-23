

## -------------- chap 8 ----------------- ##

✍️👋 React CSS Styling

1. Inline Styling
2. CSS Stylesheets
3. CSS Modules

🔗 Inline Styling
To inline style an element, we can make a Javascript Object, like this:

function App() {
  return (
    <div>
      <h2 style={{ backgroundColor: "#7d5fff", color:'white', }}>WebKnuDocs</h2>
    </div>
  )
}


In this first curly brace is to write javascript and second is to make a javascript object. We can also write it like:

function App() {
  const h2Style = {
    backgroundColor: '#7158e2',
    color: 'white'
  }
  return (
    <div>
      <h2 style={h2Style}>WebKnuDocs</h2>
    </div>
  )
}

CSS property name must be camelCase. background-color would be backgroundColor


🔗 CSS Stylesheets
You can save the whole CSS in a separate file with file extension .css and import it in your application.


src/App.css
.heading{
    background-color: red;
    font-size: 90px;
}

Here we are writing CSS, so we don't need to make JS Object or do it in camelCase.

App.js
Just import it like this:

import React from 'react'
import './App.css';

function App() {
  return (
    <div>App</div>
  )
}

export default App


🔗 CSS Modules
In this you don't have to worry about name conflicts as it is component specific. The CSS is available only for the file in which it is imported.
Make a file with extension .module.css, example: index.module.css
Make a new file index.module.css and insert some CSS into it, like this:


src/index.module.css

.button {
  background-color: 'purple';
  color: 'white';
}

Import it in component like this:

import styles from './index.module.css'; 

const App = () => {
    return (
        <button className={styles.button}>Click me!</button>
    )
};

export default App;


✍️👋 Tailwind Css in React Js
🔗 Install tailwind Css
1. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


2. Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Run your build process with npm run start.

🔗 Bootstrap in React Js
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  </body>
</html>