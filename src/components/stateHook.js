import React, {useState} from "react";

function Counter() {
    //const [count, setCount] = useState(0)
    const [fruit, setFruitName] = useState("Banana")
    //return <button onClick={()=>setCount(count+1)}>{count} Counter</button>
    return <button onClick={()=>setFruitName("Apple")}>I like {fruit}</button>
}

export { Counter }