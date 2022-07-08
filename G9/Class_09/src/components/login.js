import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { authenticate } from "../state/userReducer";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(authenticate({ user: { userName, password }, type: "LOGIN" }));
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
