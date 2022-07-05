import "./Counter.css";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../state/slices/counterSlice";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispach = useDispatch();

  return (
    <div className="Counter">
      <div className="display">{counter.value}</div>
      <div style={{ display: "flex" }}>
        <Button
          onButtonClick={e => dispach(decrementByAmount(5))}
          buttonText="Remove 5"
        />
        <Button
          style={{ backgroundColor: "lightgreen" }}
          onButtonClick={e => dispach(increment())}
          buttonText="Add"
        />
        <Button
          style={{ backgroundColor: "lightpink" }}
          onButtonClick={e => dispach(decrement())}
          buttonText="Remove"
        />
        <Button
          onButtonClick={e => dispach(incrementByAmount(5))}
          buttonText="Add 5"
        />
      </div>
    </div>
  );
};

export default Counter;
