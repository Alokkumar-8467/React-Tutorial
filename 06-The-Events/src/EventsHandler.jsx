
const EventsHandler1 = () => {
    return <button onClick={() => {alert("hello")}}>Click me</button>;
}



const EventsHandler2 = ()=>{
    return (
    <form onSubmit={() => {alert("Form filled Successfully")}}>
        <input type = "text"/>
    </form>
    );
};



export default function Events() {
    return (
      <>
        <h1>Button and Form</h1>
        <EventsHandler1 />
        <p>Fill this form and press Enter</p>
        <EventsHandler2 />
      </>
    );
  }
