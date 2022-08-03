import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import response from "../response";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);

//   const data = response;

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
          <div className="search-page__options">
            <div className="search-page__options--left">
              <div className="search-page__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search-page__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="search-page__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="search-page__option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="search-page__option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="search-page__option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="search-page__options--right">
              <div className="search-page__option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="search-page__option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="search-page__results">
          <p className="search-page__results-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="search-page__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="search-page__result--image"
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a href={item.link} className="search-page__result--title">
                <h2>{item.title}</h2>
              </a>
              <p className="search-page__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
