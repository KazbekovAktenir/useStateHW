import React, { useState } from "react";
import ClickButton from "./components/ClickButton";
import ClickCounter from "./components/ClickCounter";
import ResetBtn from "./components/ResetBtn";

const App = () => {
  let [clickCount, setClickCount] = useState(0);
  const increment = () => {
    setClickCount(clickCount + 1);
  };
  const reset = () => {
    setClickCount(0);
  };
  return (
    <div>
      <ClickCounter count={clickCount} />
      <ClickButton onClick={increment} />
      <ResetBtn onClick={reset} />
    </div>
  );
};

export default App;
