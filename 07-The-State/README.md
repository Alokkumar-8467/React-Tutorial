# 07-The-State

The state represents data in a component.

Allows components to manage and store data that canchange over time.
A crucial part of building dynamic web apps.

Usage : With variables and Hooks.


To update a component with new data, two things need to happen:

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

The useState Hook provides those two things:

1. A state variable to retain the data between renders.
2. A state setter function to update the variable and trigger React to render the component again.