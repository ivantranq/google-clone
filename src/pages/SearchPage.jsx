import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import response from "../response";
import Search from "../components/Search";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // const { data } = useGoogleSearch(term);

  const data = response;

  console.log(data);

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img
          className="search-page__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search-page__header-body">
            <Search hideButtons />
        </div>
      </div>
      <div className="search-page__results"></div>
    </div>
  );
};

export default SearchPage;
