import { useReducer } from "react";

const initialState = {count: 0}

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {count: state.count + 1}
            case "decrement":
                return {count: state.count - 1}
                case "reset":
            return {count: 0}
        default:
            return state;
    }
}

export default function CounterUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter with useReducer: {state.count}</h1>
            <button onClick={() => state.count < 10 && dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => statecount > 0 && dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}