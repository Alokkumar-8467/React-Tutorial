# 02_Components

## 02.1 THE COMPONENTS

Components are building blocks for creating UI.
Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!
It includes : Header, Sidebar, Cards, CArd Item, Footer.

#### Components: UI building blocks.

On the Web, HTML lets us create rich structured documents with its built-in set of tags like <h1> and <li>:

```
<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>

```


#### And here’s how to build a component:

```
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

```

#### Step 1: Export the component

The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.

#### Step 2: Define the function 

With function Profile() { } you define a JavaScript function with the name Profile.

* React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

#### Step 3: Add markup

The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.

Return statements can be written all on one line, as in this component:

```
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

But if your markup isn’t all on the same line as the return keyword, you must wrap it in a pair of parentheses:

```
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

* Without parentheses, any code on the lines after return will be ignored!

#### Using a component

Now that you’ve defined your Profile component, you can nest it inside other components. For example, you can export a Gallery component that uses multiple Profile components:

```
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

#### What the browser sees 

Notice the difference in casing:

<section> is lowercase, so React knows we refer to an HTML tag.
<Profile /> starts with a capital P, so React knows that we want to use our component called Profile.
And Profile contains even more HTML: <img />. In the end, this is what the browser sees:

```
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

#### Nesting and organizing components

Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If this file gets crowded, you can always move Profile to a separate file. You will learn how to do this shortly on the page about imports.

Because the Profile components are rendered inside Gallery—even several times!—we can say that Gallery is a parent component, rendering each Profile as a “child”. This is part of the magic of React: you can define a component once, and then use it in as many places and as many times as you like.

###### Components can render other components, but you must never nest their definitions:

```
export default function Gallery() {
  //  Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
```

###### The snippet above is very slow and causes bugs. Instead, define every component at the top level:

```
export default function Gallery() {
  // ...
}

//  Declare components at the top level
function Profile() {
  // ...
}
```

###### When a child component needs some data from a parent, pass it by props instead of nesting definitions.

#### Recap

React lets you create components, reusable UI elements for your app.

In a React app, every piece of UI is a component.

React components are regular JavaScript functions except:

Their names always begin with a capital letter.
They return JSX markup.

## 02.2 Importing and Exporting Components

You can move a component in three steps:

1. Make a new JS file to put the components in.
2. Export your function component from that file (using either default or named exports).
3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

Here both Profile and Gallery have been moved out of App.js into a new file called Gallery.js. Now you can change App.js to import Gallery from Gallery.js:

1. Gallery.js:
Defines the Profile component which is only used within the same file and is not exported.
Exports the Gallery component as a default export.
2. App.js:
Imports Gallery as a default import from Gallery.js.
Exports the root App component as a default export.

###### Syntax:
```
import Gallery from './Gallery';
```

#### Default vs named exports

There are two primary ways to export values with JavaScript: default exports and named exports. So far, our examples have only used default exports. But you can use one or both of them in the same file. A file can have no more than one default export, but it can have as many named exports as you like.

Syntax: Default - Export statement - export default function Button() {}
                - Import statement -  import Button from './Button.js';

        Named   - Export statement - export function Button() {}
                - import { Button } from './Button.js';    

#### Exporting and importing multiple components from the same file

First, export Profile from Gallery.js using a named export (no default keyword):

```
export function Profile() {
  // ...
}
```

Then, import Profile from Gallery.js to App.js using a named import (with the curly braces):

```
import { Profile } from './Gallery.js';
```

Finally, render <Profile /> from the App component:

```
export default function App() {
  return <Profile />;
}
```

Now you’re using a mix of default and named exports:

1. Gallery.js:
Exports the Profile component as a named export called Profile.
Exports the Gallery component as a default export.
2. App.js:
Imports Profile as a named import called Profile from Gallery.js.
Imports Gallery as a default import from Gallery.js.
Exports the root App component as a default export.


## 02.3 Writing Markup with JSX

JSX is a syntax extension  for JavaScript that looks similar to XML or HTML.

1. JSX is a combination of JavaScript and XML.
2. JSX can be used with React to develop rich and dynamic React apps.

### The Rules of JSX 

#### 1. Return a single root element

To return multiple elements from a component, wrap them with a single parent tag.
you can use a <div></>

This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

#### 2. Close all the tags 

JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

###### JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.