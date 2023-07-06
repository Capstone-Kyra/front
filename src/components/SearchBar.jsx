import { useState } from 'react';

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');

    filteredPlans = allTrips.filter((singleTrip) => {
        let lowercasedName = singleTrip.name.toLowerCase();
        let lowercasedQuery = searchQuery.toLowerCase();

        if(lowercasedName.includes(lowercasedQuery)) {
            return singleTrip;
        }
    })

    return(
        <div>
            <form>
                <label htmlFor="search-query">Search</label>
                <input 
                    name="search-query"
                    type="text" 
                    placeholder="search"
                    value={searchQuery}
                    onChange={(search) => {
                        setSearchQuery(search.target.value);
                    }}
                ></input>
            </form>
            {
                filteredPlans.length ? filteredPlans.map((singleTrip, index) => {
                    return(
                        <div key={index}>
                            <h2>Trip: {singleTrip.name}</h2>
                            <p>Description: {singleTrip.description}</p>
                        </div>
                    )
                }) : <p>loading</p>
            }
        </div>
    )
}

export default SearchBar;