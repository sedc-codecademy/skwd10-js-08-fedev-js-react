import { useEffect, useState } from "react";
import "./SearchInput.css";

const SearchInput = props => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      props.updateSearchValue(inputValue);
    }, 1000);
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
