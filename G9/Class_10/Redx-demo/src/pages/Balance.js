import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setNewBalance } from "../state/userSlice";

const Balance = () => {
  const balance = useSelector((state) => state.user.balance);
  const [newBalance, setNewBalances] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    dispatch(setNewBalance(balance + newBalance));
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
          onChange={(e) => setNewBalances(parseInt(e.target.value))}
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
