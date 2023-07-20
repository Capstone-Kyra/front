import { useState, useEffect } from "react";
import SearchTrip from "./SearchTrip";
import { Link } from "react-router-dom";

const BASE_URL = `http://localhost:3000`;

function SearchBar({allTripsData, allReviewsData}) {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(allReviewsData, "reviews data belongs here")
  let filteredtrips = allTripsData.filter((trip)=>{
    // console.log('this is the trip', allTripsData)
    // console.log(trip)

    let lowercasedName = trip.location.toLowerCase();
    let lowercasedQuery = searchQuery.toLowerCase();
    // console.log('these are the props alltrips')

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
            return <SearchTrip key={idx} trip={trip} allTripsData={allTripsData} allReviewsData={allReviewsData}/>;
          })
          
        ) : (
          <p>This trip doesn't exist..</p>
        )}
      </div>
      
    </div>
  );
}

export default SearchBar;