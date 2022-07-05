import { useEffect } from "react";
import "./CountryCardContainer.css";
import CountryCard from "../CountryCard/CountryCard";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const CountryCardContainer = () => {
  const {
    value: countries,
    status,
    error,
  } = useSelector(state => state.countries);

  let content;

  if (status === "loading") {
    content = <Spinner />;
  } else if (status === "succeeded") {
    content = countries.map((country, i) => (
      <CountryCard key={i} country={country} />
    ));
  } else if (status === "failed") {
    content = <h1>No Country Found ... please try again</h1>;
  }

  return <div className="CountryCardContainer">{content}</div>;
};

export default CountryCardContainer;
