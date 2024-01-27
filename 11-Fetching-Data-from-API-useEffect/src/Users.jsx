import React, { useEffect , useState } from "react";
import User from "./User";
const Users = () => {
  
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log("Error received", err));
    }, []);
    console.log(users);
  return (
    <section>
      <div style={{display: "flex", width:"100%", flexWrap:"wrap", gap:4}}>
      {users.map((user)=>(
      <User avatar_url={user.avatar_url} login={user.login} key ={user.id} />
      ))}
      </div>
    </section>

  );
};

export default Users;