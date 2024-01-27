# 12-useRef

It allows to access DOM properties and methods without triggering re-render.

Suppose we have input element element, So by using useRef it allow us to grab thr DOM properties and methods of that input element, and we can change there values, id, name, or any thing with that.

Used to communicate with DOM properties.
An Uncontrolled Element by React.
Have a current properties which accesses DOM methods and properties.

Syntax: const elementRef = useRef();