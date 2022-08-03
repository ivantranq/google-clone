import { useState, useEffect } from "react";
import API_KEY from "./keys.js";

const CONTEXT_KEY = "c6811a0de83554bcf";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then( res => res.json())
      .then(result => {
        setData(result)
      })
    }

    fetchData();
  }, [term]);

  return { data }
};

export default useGoogleSearch;
