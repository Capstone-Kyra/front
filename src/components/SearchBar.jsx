import { useState, useEffect } from "react";
import SearchTrip from "./SearchTrip";

const BASE_URL = `http://localhost:3000`;

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  let filteredtrips = props.allTripsData.filter((trip)=>{
    console.log(trip)
    let lowercasedName = trip.title.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();

    if (lowercasedName.includes(lowercasedQuery)) {
      return trip;
    }
  });
  return (
    <div id="container">
      <form>
        <label className="search-products" htmlFor="search-query">
          Search Trips:{" "}
        </label>
        <input
          name="search-query"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(search) => {
            setSearchQuery(search.target.value);
          }}
        ></input>
      </form>
      <div>
        {filteredtrips.length ? (
          filteredtrips.map((trip, idx) => {
            return <SearchTrip key={idx} trip={trip} allTripsData={props.allTripsData} />;
          })
        ) : (
          <p>This trip doesn't exist..</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;