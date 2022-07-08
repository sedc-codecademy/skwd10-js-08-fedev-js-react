import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../state/userReducer";

const Welcome = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <div>
      {userData.loggedUser ? (
        <>
          <h2>WELCOME {userData.loggedUser.userName}</h2>
          <button onClick={() => dispatch(authenticate({ type: "LOGOUT" }))}>
            LOGOUT
          </button>
        </>
      ) : (
        <h2>Login first</h2>
      )}
    </div>
  );
};

export default Welcome;
