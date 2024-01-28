import React, { useReducer } from 'react'

const reducerFn = (state, action) => {
    switch (action.type){
        case "FORWARD":
            return { steps: state.steps + 1 };
        case "BACKWARD":
            return { steps: state.steps - 1 };

        default:
            return {...state}
    }
};
const initialState = {
    steps: 0,
};
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState);
    const handleForward = () => {
        const action = { type: "FORWARD"};
        dispatch(action);
    };
    const handleBackwards = () => {
        const action = { type: "BACKWARD"};
        dispatch(action);
    };
  return (
    <div>
     <p>Player has moved {state.steps} Steps </p>
     <div style={{display: "flex", justifyContent:"center", gap: 10}}>
        <button onClick={handleForward}>Move Forward</button>
        <button onClick={handleBackwards}>Move Backward</button>
     </div>
    </div>
  )
}

export default UseReducer;