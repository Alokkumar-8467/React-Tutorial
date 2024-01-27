import {useEffect, useState} from "react";                                                                                                                                                                                


const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");

  }, [count]);
  console.log("Rendering Component");
  return (
    <div> 
      <div>useEffectExample</div>
      <div>count is {count}</div>
      <button onClick={() => setCount((prev) => prev + 1 )}>Increment</button>
    </div>
  );
};

export default UseEffectExample;

// Here Rendering component and useEffect print two times, because we use StrictMode in React in main.js.