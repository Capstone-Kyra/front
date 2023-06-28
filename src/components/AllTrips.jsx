import React, { useState } from 'react';
import { getAllTrips } from '../api-adapters';
// import { Link } from 'react-router-dom';

export default function AllTrips(props) {  
    console.log('alltrips props');
    console.log(props);  
    return(
        <div>
            <h4>anything</h4>
            {props.allTripsData.length ? props.allTripsData.map((singleTrip) => {
                return(
                    <div key={singleTrip.id}>
                        <h4>Blah blah {singleTrip.id}</h4>
                    </div>
                )
            }) : <p>Loading trips</p>
            }
        </div>
    )
}

