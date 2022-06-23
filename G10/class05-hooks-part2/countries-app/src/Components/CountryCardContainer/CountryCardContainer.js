import "./CountryCardContainer.css";
import CountryCard from "../CountryCard/CountryCard";

const CountryCardContainer = ({ countries, errorMsg }) => {
  console.log(countries);
  return (
    <div className="CountryCardContainer">
      {!countries && <h2>Loading...</h2>}
      {errorMsg && <h2>{errorMsg}</h2>}
      {countries &&
        !errorMsg &&
        countries.map((country, i) => (
          <CountryCard key={i} country={country} />
        ))}
    </div>
  );
};

export default CountryCardContainer;
