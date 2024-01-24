import React from "react";

const Profile = (props) => {
    console.log(props);

    return (
        <div>
        <h1>Name: {props.name}</h1>
        <p>Email: {props.email}</p>
        <article>Phone: {props.phone}</article>
        </div>
    );
};

export default Profile;