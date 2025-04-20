import React, {useState, useEffect} from "react";

const StartPause = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCount(prev => prev + 1)
            })
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleReset = () => {
        setIsRunning(false)
        setCount(0)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Auto Counter</h2>
          <h1>{count}</h1>
          <button onClick={() => setIsRunning(true)}>▶ Start</button>
          <button onClick={() => setIsRunning(false)}>⏸ Pause</button>
          <button onClick={handleReset}>🔄 Reset</button>
        </div>
      );
}

export default StartPause