const List = () => {

    const people = [{

        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];
      

    const technologies = ["JavaScript", "Python", "C#", "Golang", "C++", "SQL"];
    return (
        <div>
            <h5>Technologies:</h5>
            {technologies.map((item) => (
                <li key = {item}>{item}</li>  // 1. Here we add the key.
            ))}
            <br />
            <h5>peoples:</h5>
            {people.map((item) => (
                <div style={{border: "1px solid black", padding: "10px", borderRadius:"10px", margin: "10px"}} key = {item.id}>
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Profession: {item.profession}</p>
                        <p>Accomplishment: {item.accomplishment}</p>
                        <p>ImageID: {item.imageId}</p>
                    </div>
                </div>  
            ))}
        </div>
    );
}

export default List;

/*
1. 
We get this type of warning because use change or edit the array 
So, for doing this we need to specift out list with a perticular key, and that key must be unique.

* If array items can be move insert, delete. A well-chosen key helps react infer what exactly has happened
* And make the crrect update to the DOM tree.  

Warning: Each child in a list should have a unique "key" prop.

Check the render method of `List`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at List
    at div
    at App

*/