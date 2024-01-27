import { useState } from "react";

const Stateexample = () => {
    const [count2, setCount2] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count3, setCount3] = useState(0);

    // Components Rerendered used once. 
    console.log("Component Rerendered");

    const increment1 = () => {
        setCount1((prev) => prev + 2 ) 
        // Or we can write it as

        // setCount1(count + 1);
    }
        /*  We use React schedules the state updates.
          * Stateupdate are Async in behaviour. 
          * it schedules that in batches.
          * A copy is shared in the batch. 
          when we use more than one setCount(count + 1); in our proram its not change the state immediately.

          For this code setCounts(counts + 5) can run and update from 0 to 5.
          And this code runs three times so, count has value 15.
          But its not happen.
          Because when first count run its changes value but not update imedately as state is Async so, it schedule the update.
          then second count run from again count value = 0 
          then third count run from again count value = 0
        */
    const increment2 = ()=> {
        setCount2(count2 + 5);  // scheduled at count was 0
        setCount2(count2 + 5);  // scheduled at count was 0
        setCount2(count2 + 5); // scheduled at count was 0
    }
        /*
        How to overcome this problem
        * we use prev for storing that count which will be used or store data immediately.
        Now here we use the code two times and we made count + 10, 
        Because it run two times so output comes 20. after clicking one time.
        If we click it 2 times then output become 40.
        */
    const increment3 = ()=> {
        setCount3((prev) => prev + 10 );        // here we schedule at last state value.
        setCount3((prev) => prev + 10 );        // here we schedule at last state value.
        setCount3((prev) => prev + 10 );        // here we schedule at last state value.

    }

    return (
        <div>
            <p>Count1:{count1}</p>
            <button onClick={increment1}>Increment </button>
            <p>Count2:{count2}</p>
            <button onClick={increment2}>Increment </button>
            <p>Count3:{count3}</p>
            <button onClick={increment3}>Increment </button>
            
        </div>
    );
}

export default Stateexample;