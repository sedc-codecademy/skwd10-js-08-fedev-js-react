import { useState, useEffect } from "react";
import axios from "axios";
import CountryCardContainer from "../../Components/CountryCardContainer/CountryCardContainer";
import "./CountriesPage.css";
import SearchInput from "../../Components/SearchInput/SearchInput";

const COUNTRIES_ALL_URL = "https://restcountries.com/v3.1/all";
const COUNTRIES_SEARCH_URL = "https://restcountries.com/v3.1/name/";

const CountriesPage = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  //   useEffect(() => {
  //     axios.get(COUNTRIES_ALL_URL).then(response => {
  //       console.log(response.data);
  //       setCountries(response.data);
  //     });
  //   }, []);

  useEffect(() => {
    if (searchValue.length < 1) {
      axios.get(COUNTRIES_ALL_URL).then(response => {
        console.log(response.data);
        setErrorMsg(null);
        setCountries(response.data);
      });
    } else {
      axios
        .get(COUNTRIES_SEARCH_URL + searchValue)
        .then(response => {
          console.log(response.data);
          setErrorMsg(null);
          setCountries(response.data);
        })
        .catch(error => {
          console.log(error);
          if (error.response.data.status === 404) {
            setErrorMsg("No countries found, please try again...");
          }
        });
    }
  }, [searchValue]);

  const updateSearchValue = newValue => {
    setSearchValue(newValue);
  };

  console.log("Countries page rerendered");

  return (
    <section className="page CountriesPage">
      <div className="page__heading">
        <h2>Countries</h2>
        <p>You can use this page to search for countries</p>
      </div>
      <div className="content__container">
        <SearchInput updateSearchValue={updateSearchValue} />
        <CountryCardContainer countries={countries} errorMsg={errorMsg} />
      </div>
    </section>
  );
};

export default CountriesPage;
