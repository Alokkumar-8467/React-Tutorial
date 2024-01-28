# 13-useReducer

* Used to manage complex state logic by dispatching actions.
* It mainly focused on on managing the complex State logic by dispatching some acitons.
* It is useful when the state transitions depends on the previous state.
* It is useful when the state transitions depends on the previous states.
* So inside the use Reducer we already know the previous state and we only want to create a new state, 
  we create the copy of the previous stateand then we send that stateto the UI. 

* Can handle complex state managment logic.
* Similar to REDUX pattern.
* Widely used for expensive calculations.
* Identifies state update via dispatching actions and payload.

Syntax: const [state,dispatch] = useReducer(reducerFn, initialState).