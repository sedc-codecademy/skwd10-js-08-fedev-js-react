import CountryCardContainer from "../../Components/CountryCardContainer/CountryCardContainer";
import "./CountriesPage.css";
import SearchInput from "../../Components/SearchInput/SearchInput";

const CountriesPage = () => {
  return (
    <section className="page CountriesPage">
      <div className="page__heading">
        <h2>Countries</h2>
        <p>You can use this page to search for countries</p>
      </div>
      <div className="content__container">
        <SearchInput />
        <CountryCardContainer />
      </div>
    </section>
  );
};

export default CountriesPage;
