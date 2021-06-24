import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";
import { CounterContext } from "./CounterContext";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <Counter />
    </CounterContext.Provider>
  );
}
