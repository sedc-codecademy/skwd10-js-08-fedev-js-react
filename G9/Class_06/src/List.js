import React, { useEffect, useState } from "react";

const List = (props) => {
  const [data, setData] = useState([]);
  const { getResult } = props;

  useEffect(() => {
    setData(getResult(4));
    console.log("LIST UPDATED");
  }, [getResult]);
  return data.map((el, index) => <p key={index}>{el}</p>);
};

export default List;
