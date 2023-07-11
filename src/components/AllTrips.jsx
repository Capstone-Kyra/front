import React, { useState } from 'react';
import { getAllTrips } from '../api-adapters';
import { Link } from 'react-router-dom';
import DeleteTrip from './DeleteTrip';

export default function AllTrips(props) {  
    // console.log('alltrips props');
    console.log(props);  
    return(
        <div>
            {props.allTripsData.length ? props.allTripsData.map((singleTrip) => {
                console.log('single trip:')
                console.log(singleTrip)
                return(
                    <div key={singleTrip.id}>
                        <h4>Location: {singleTrip.location}</h4>
                        <h4>Type: {singleTrip.type}</h4>
                        <p>Description: {singleTrip.description}</p>
                        <DeleteTrip />
                        <Link to ={`${singleTrip.id}`}><button>See Details</button></Link> 
                    </div>
                )
            }) : <p>Loading trips</p>
            }
        </div>
    )
}
