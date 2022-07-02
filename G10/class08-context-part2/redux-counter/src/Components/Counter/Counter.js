import "./Counter.css";
import Button from "../Button/Button";
import { useSelector } from "react-redux";

const Counter = () => {
  const store = useSelector(state => state);

  console.log(store);

  return (
    <div className="Counter">
      <div className="display">0</div>
      <div style={{ display: "flex" }}>
        <Button style={{ backgroundColor: "lightgreen" }} buttonText="Add" />
        <Button style={{ backgroundColor: "lightpink" }} buttonText="Remove" />
      </div>
    </div>
  );
};

export default Counter;
