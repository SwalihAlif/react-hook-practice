import React from "react";
import ParentComponent from "./useCallback/useCallback";
import ColorParentComponent from "./useCallback/useCallback2";
import ExpensiveComponent from "./useMemo/ExpensiveCalculation";

function App() {

  return(
    <div>
      <ParentComponent />
      <ColorParentComponent />
      <ExpensiveComponent />

    </div>
  )
}

export default App;