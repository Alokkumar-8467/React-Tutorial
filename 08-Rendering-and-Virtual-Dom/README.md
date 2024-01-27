# 08-Rendering-and-Virtual-Dom


* The Rendering

Visual representation of a component
A process of generating visual representation of UI.

* The Virtual DOM

The Copy of Real DOM, Managed by react to identift updates.
Updates the Components tonoptimize state update and performance.
It updates only those components where the states has changed.

* The Reconcillation

Algorithm for changing DOM.
Compares the new Virtual DOM Tree with previous one and updates the state.


Any screen update in a React app happens in three steps:

Trigger
Render
Commit

You can use Strict Mode to find mistakes in your components
React does not touch the DOM if the rendering result is the same as last time