import React from "react";

// JSX Rule 1 - Single root elements...

const Element1 = (
    <div>
    <h1>Hello, React!</h1>
    <p>This is a JSX example.</p>
    </div>
);

// JSX Rule 2 - Each element must be closed with closing tags...

const Element2 = (
    <div>
    <p>This is a PAragraph.</p>
    <input type="input" />;
    </div>
);

// JSX Rule 3 - classname insted of class and camelCase attributes...

const element3 = <div className="container">Hello, React!</div>
const button = (
    <button className="btn btn-primary" onClick>
        Hello, React!
    </button>
);

const validElement = (
    <div>
    <h1>
    Hello, React!</h1>
    <p>This is a JSX example.</p>
    </div>
);

// JSX Rule 4 - Inline CSS Styles...

const styles = {
    color: "blue",
    fontsize: "16px",
};

const element4 = <p style = {style}Styling with
></p>;

// JSX Rule 5 - Use expression for dynamic rendering...

const firstName = "Alok";
const lastName = "Kumar";

const element = (
    <div>
        <p>FirstName is: {firstName}</p>
        <p>lasttName is: {lastName}</p>
    </div>
);


// JSX Rule 6 - Use consditional operator intead of consitional statements.
//              No if-else , switch consitions, use ternary, nullish, AND, OR operators.

const value = 1;
const str = "";


const validElement2 = <div>{value ? "great": "sorry"}</div>;
const validElement3 = <div>{str || "No String Provided"}</div>;


// JSX Rule 7 - Self closing tags must be closed.

const invalidElement4 = (
    <img src="/flie.jpg" alt="File" />
);

const validElement5 = (
    <div>
        <img src="/file.jpg" alt="File" />
        <input type="text" />
    </div>
);