import { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        console.log("useEffect is called");

        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
            {console.log("component is rendered")}
        </>
    );
}