// import React, { useState } from "react";
import { useCounter } from "./createingHooks";

function CounterApp() {
    // const [count, setCount] = useState(0)
    // const increment=()=>{
    //     setCount((prevState) => {
    //         return prevState+1;
    //     })
    // }

    // const decrement=()=>{
    //     setCount(prevState => prevState-1);
    // }

    // const reset=()=>{
    //     setCount(0)
    // }
const [count, increment, decrement, reset] = useCounter(0)

    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export { CounterApp}