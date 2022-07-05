import { useEffect, useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCountries } from "../../state/slices/countriesSlice";

const SearchInput = props => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  // const status = useSelector(state => state.countries.status);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchCountries());
  //   }
  // }, [dispatch, status]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // props.updateSearchValue(inputValue);
      dispatch(fetchCountries(inputValue));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={inputValue}
        placeholder="Begin typing to search for countries"
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
