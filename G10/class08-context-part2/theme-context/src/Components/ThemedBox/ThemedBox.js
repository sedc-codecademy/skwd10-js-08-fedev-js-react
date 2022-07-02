import "./ThemedBox.css";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

const ThemedBox = props => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="ThemedBox" style={theme}>
      <h1>This is a themed box component!</h1>
    </div>
  );
};

export default ThemedBox;
