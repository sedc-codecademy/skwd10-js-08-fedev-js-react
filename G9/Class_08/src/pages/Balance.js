import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../state/UserContext";

const Balance = () => {
  const { balance, setBalance } = useContext(UserContext);
  const [newBalance, setNewBalance] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setBalance((prevValue) => prevValue + newBalance);
    setNewBalance("");
  };
  return (
    <div>
      <h4>Current balance: {balance}</h4>
      <form onSubmit={submit}>
        <label htmlFor="credit">Credits</label>
        <input
          ref={inputRef}
          type="number"
          value={newBalance}
          onChange={(e) => setNewBalance(parseInt(e.target.value))}
          id="credit"
          name="credit"
        />
        <button type="submit" disabled={!newBalance}>
          Buy Credits
        </button>
      </form>
    </div>
  );
};

export default Balance;
