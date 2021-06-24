import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const Button = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return <button onClick={() => setCounter(counter + 1)}>Increment</button>;
};

export default Button;
