import React, { useState } from 'react';
import { getAllTrips } from '../api-adapters/index'; 
import { Link } from 'react-router-dom';

export default function AllTrips(props) {
    const [getAllTrips, setAllTrips] = useState([]);
        return(
            <div>
                {props.allTrips.length ? props.allTrips.map((singleTrip) => {
                    return(
                        <div>
                            <h4>{singleTrip.title}</h4>
                        </div>
                    )
                }) : <p>Loading trips</p>
            }
            </div>
        )
}

