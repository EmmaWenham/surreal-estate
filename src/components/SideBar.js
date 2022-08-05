import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const Sidebar = () => {
  const history = useHistory();
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const [query, setQuery] = useState();

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <p className="sidebar-title">Filter by City</p>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Leeds" })}
      >
        Leeds
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Liverpool" })}
      >
        Liverpool
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>
      <p className="sidebar-title">Sort by Price:</p>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: +1 })}
      >
        Ascending
      </Link>
      <Link
        className="sidebar-link"
        to={buildQueryString("sort", { price: -1 })}
      >
        Descending
      </Link>
      <form onSubmit={handleSearch}>
        <input
          className="search-field"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default Sidebar;
