const  Profile = () => {
    const name = "Alok kumar";
    const email = "alokkumar@gmail.com";
    const phone = "+987654321" ;
    return (  
    <div>
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <article>Phone: {phone}</article>
    </div>
  );
}

export default Profile;