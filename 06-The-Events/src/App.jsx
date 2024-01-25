/*
# 06-The-Events

Events are used for user interaction.

Events are subscribeand get fired when specified users interaction.
Can update anything.

SYNTAX : <button onClick={() => alert("Hi")}>Click Me </button>
*/

import  Events from "./EventsHandler";
function App() {
  return (
    <div>
       <h1>Alok</h1>
      <Events />
    </div>
  );
}

export default App;
