
import {useEffect, useRef} from "react";

const UseRef = () => {
    const headingRef = useRef();
    const inputRef = useRef();

    useEffect (() => {
        headingRef.current.innerText = "REF UPDATE";
        inputRef.current.focus();
    }, []);

  return (
    <div>
        <h1 ref = {headingRef}>Hi</h1>
        <input ref={inputRef} type="text" />
        <br />
        <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRef;