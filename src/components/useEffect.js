import React, { useState, useEffect } from "react";

function EffectCounter() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `you have clicked ${count} times`
    })

    return <button onClick={()=>setCount(count+1)}>{count} Click to change document title</button>
}

export { EffectCounter }