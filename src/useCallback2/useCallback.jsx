import React, {useState, useCallback, useRef, useEffect} from "react";

const ChildComponent = ({onClick}) => {
    console.log("Child rendered.");
    return <button onClick={onClick}>Click me</button>

}

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const prevFunctionRef = useRef(null)

    const HandleButton = useCallback(() => {

        console.log("Button Clicked.")
    }, []);

    useEffect(() => {
        if (prevFunctionRef.current) {
            
            console.log(
                "Function reference changed: ",
                !Object.is(prevFunctionRef.current, HandleButton)
            );
        }
        prevFunctionRef.current = HandleButton;
    }, [HandleButton])

    {/*If you want to exprece the working of useCallback that is preventing the new function
        creation, remove useCallback hook from the HandleButton function then check the console 
        while incrementing the count
        
        If you need to see what will happen while using the memo the prevent the rerendering the 
        unchaged parts, use memo in ChildComponet*/}

    return (

        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ChildComponent onClick={HandleButton}/>
        </div>
    )
}

export default ParentComponent;