import "./App.css";
import Login from "./components/login";
import ThemeSelection from "./components/themeSelection";
import Welcome from "./components/welcome";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const style =
    theme === "white" ? null : { backgroundColor: "black", color: "white" };
  return (
    <div className="App" style={style}>
      <Welcome />
      <Login />
      <ThemeSelection />
    </div>
  );
}

export default App;
