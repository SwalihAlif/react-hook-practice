import React, {useState, useCallback, useEffect, useRef} from "react";

const ColorBox = ({changeColor}) => {
    console.log("🎨 Color-box re-rendred");
    return <button onClick={changeColor}>Change color</button>
}

const ColorParentComponent = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue");
    const colorRef = useRef(null)

    const HandleColorChange = useCallback(() => {
        const newColor = color === 'blue' ? "red" : 'blue';
        setColor(newColor);
    }, [])

    useEffect(() => {
        if (colorRef.current) {
            colorRef.current = HandleColorChange;
        } else {
            console.log(
                "colorFunction reference changed: ",
                !Object.is(colorRef.current, HandleColorChange)
            )
            colorRef.current = HandleColorChange;
        }
    }, [HandleColorChange])

    return (
        <div>
            <h1>Counter for color changing: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <div   
             style={{
                width: "100px",
                height: "100px",
                backgroundColor: color,
                margin: "20px auto"
             }} 
            ></div>
            {/* Child component that should NOT re-render when count changes */}
            <ColorBox changeColor={HandleColorChange} />
        </div>
    )
}

export default ColorParentComponent;