import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../state/themeReducer";

const ThemeSelection = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  console.log(theme);
  return (
    <div>
      <button
        disabled={theme === "white"}
        onClick={() => dispatch(changeTheme("white"))}
      >
        White
      </button>
      <button
        disabled={theme === "dark"}
        onClick={() => dispatch(changeTheme("dark"))}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeSelection;
