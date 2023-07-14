import React, { useState } from 'react';
import { getAllTrips } from '../api-adapters';
import { Link } from 'react-router-dom';

export default function AllTrips(props) {  
    // console.log('alltrips props');
    console.log(props);  
    return(
        <div>
            <h3>Click the link above to create your own trip listing!</h3>
            {props.allTripsData.length ? props.allTripsData.map((singleTrip) => {
                console.log('single trip:')
                console.log(singleTrip)
                return(
                    <div key={singleTrip.tripId}>
                        <h4>Location: {singleTrip.location}</h4>
                        <h4>Type: {singleTrip.type}</h4>
                        <p>Description: {singleTrip.description}</p>
                        <Link to ={`/trips/${singleTrip.tripId}`}><button>See Details</button></Link> 
                    </div>
                )
            }) : <p>Loading trips</p>
            }
        </div>
    )
}
