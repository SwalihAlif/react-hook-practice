import React, {useState, useEffect} from "react";

const UptoTenCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 9) {
                    clearInterval(intervalId);
                }
                return prevCount + 1;
            });
        }, 1000);

        return () => clearInterval(intervalId)
    }, []);

    return <h1>Count: {count}</h1>
}

export default UptoTenCounter;