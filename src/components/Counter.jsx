import Button from "./Button";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";
const Counter = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
      <Button />
    </>
  );
};

export default Counter;
