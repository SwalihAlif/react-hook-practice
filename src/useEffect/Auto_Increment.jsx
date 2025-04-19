import React, {useState, useEffect} from "react";

const IntervalCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Auto Counter: {count}</h2>
        </div>
    )
}

export default IntervalCounter