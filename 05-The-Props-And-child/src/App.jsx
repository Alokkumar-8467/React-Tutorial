// 05-The-Props-And-child

/*
* Passing components as props to components
* A Components can send JSX as Props and a children can use it.
* You can have a layout structure with it.

Syntax: <Child> <div> I am a nested child </div> </chilld>

*/
import Children from "./Children";


function App() {
  return (
    <div>
    <Children>
      <div style={{background:"green"}}>
        <h1> I am Children</h1>
      </div>
    </Children>
    </div>
  )
}

export default App;
