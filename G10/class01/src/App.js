import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout/Header/Header";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  const heading = "Welcome to the store";
  const subHeading = "This is the greatest store ever";

  const person = {
    firstName: "Test",
    lastName: "Testerson",
  };

  const colors = ["lightgreen", "lightpink", "wheat", "lightgray", "lightblue"];

  const margins = [10, 20, 30];

  const listIndexes = [1, 2, 3, 4];

  const number = 10;

  return (
    <div className="App">
      <Header />
      <main className="main__container">
        <h1 className={colors[0]}>{heading}</h1>
        <h3 className="heading__three">{subHeading}</h3>
        <ul>
          {colors.map(color => (
            <li style={{ backgroundColor: color }} key={color}>
              <strong>{color}</strong>
            </li>
          ))}
        </ul>
        {/* {listIndexes.map(index => (
          <ProductList key={index} />
        ))} */}
        <ProductList />
        <ProductList />
        {/* <strong>
          <p style={{ backgroundColor: colors[2], margin: margins[1] }}>
            {person.firstName}
          </p>
          <p style={{ backgroundColor: colors[2], margin: margins[2] }}>
            {person.lastName}
          </p>
        </strong> */}
        {/* <strong>
          <p>
            {number > 10
              ? "Number is bigger than 10."
              : "Number is not bigger than 10, sorry."}
          </p>
        </strong>
        <strong>{colors[1]}</strong> */}
      </main>
    </div>
  );
}

export default App;
