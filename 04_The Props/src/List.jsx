import React from "react";

const List = (props) => {
    console.log(props);

    return (
        <div>
        <h1>Name: {props.name}</h1>
        <p>Email: {props.Position}</p>
        <article>ID : {props.ID}</article>
        </div>
    );
};

export default List;