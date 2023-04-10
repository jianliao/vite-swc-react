import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Button, ButtonType } from "@swc-react/button";

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef<ButtonType>(null);
  useEffect(() => {
    console.log(count, btnRef.current);
  }, [count]);
  return (
    <div className="App">
      <Button
        variant="cta"
        ref={btnRef}
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </Button>
    </div>
  );
}

export default App;
