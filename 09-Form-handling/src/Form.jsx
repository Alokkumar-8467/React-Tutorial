/*

In this we make a form which include these things.
  * Create A Form
  * Handle Data Of Inputs
  * Log Data On Submit

*/

// rafce
import { useState } from "react";
import "./Form.css";

const Form = () => {
    const quanttities = ["0-10", "10-100", "100-200", "200-500", "500-1,000"];

    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [quantity, setQuantity] = useState("0");

    // here we use useState four time, but we can use array and object to prevent the use of useStater many times.
    
    const [input, setInputs] = useState({title:"", description:"", price:"", quantity:""});


        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(input);
        };

        // In place of onChange we callback this function  onChange={(e)=> setTitle (e.target.value)},
        // So, we remove it and pass handleChange callBack function.

        const  handleChange = (e) => {
          setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
        };

  return (
    <section>
        <form onSubmit={ handleSubmit }>
        <div className="inputs">
          {/* In place of value={title} we use value={input.title} and for description, price, quantity we all change */}
            <input onChange={handleChange} value={input.title} type="text" name="title" placeholder="Title" />
            <input onChange={handleChange} value={input.description} type="text" name="description" placeholder="Description" />
            <input onChange={handleChange} value={input.price} type="number" name="price" placeholder="Price" />
            <select onChange={handleChange} value={input.quanttities} name="quantity">
                {quanttities.map((item) => (
                <option key={item} value={quanttities[item]}>
                    {item}
                    </option>
                    ))}
            </select>
            <button>Submit</button>
            </div>
            </form>
    </section>
  )
};

export default Form;