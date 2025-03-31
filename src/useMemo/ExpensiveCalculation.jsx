import React, {useState, useMemo} from "react";

const ExpensiveComponent = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    const slowFunction = (num) => {
        console.log("Running slow function...");

        for (let i = 0; i < 1e9; i ++) {}
        return num * 2
    }

    const computedValue = useMemo(() => slowFunction(number), [number]);
    //remove the useMemo() then check console, each and every time use click "Increment the count" button the page will be re-rendered. 
    // and in each re-rendering the slowFunction will be worked 

    return (
        <div>
            <h1>Computed Value: {computedValue}</h1>
            <button onClick={() => setCount(count + 1)}>Increment the count: ({count})</button>
            <button onClick={() => setNumber(number + 1)}>Change the number: ({computedValue})</button>
        </div>
    )
}

export default ExpensiveComponent;