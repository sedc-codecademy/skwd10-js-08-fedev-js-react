import { useEffect, useState } from "react";

const useFetchAsync = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, setData, isLoading];
};

export default useFetchAsync;
