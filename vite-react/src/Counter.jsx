import { useState } from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

    let updateCount = () => {
        if (count == 25) {
            setCount(count)
        } else if (count < 0) {
            setCount(count);
        } else {
            setCount(count + 1);
        }  
    }

    let reduceCount = () => {
        if (count == 25) {
            setCount(count)
        } else if (count <= 0) {
            setCount(count);
        } else {
            setCount(count - 1);
        }  
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={updateCount}>Plus Count</button>
        <button onClick={reduceCount}>Minus Count Count</button>
        </>
    )
}