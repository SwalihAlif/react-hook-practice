import React from "react";
import ParentComponent from "./useCallback/useCallback";
import ColorParentComponent from "./useCallback/useCallback2";
import ExpensiveComponent from "./useMemo/ExpensiveCalculation";
import CounterUseReducer from "./useReducer/CounterUseReducer";
import IntervalCounter from "./useEffect/Auto_Increment";

function App() {

  return(
    <div>
      <ParentComponent />
      <ColorParentComponent />
      <ExpensiveComponent />
      <CounterUseReducer />
      <IntervalCounter />

    </div>
  )
}

export default App;