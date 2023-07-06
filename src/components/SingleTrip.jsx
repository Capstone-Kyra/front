import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function SingleTrip(props) {
    console.log('single trip props: ' + props);
    //location, type, description
    <form className='single-trip-card'>
        <h2>ID: {props.id}</h2>
        <h2>Location: {props.location}</h2>
        <h2>Type: {props.type}</h2>
        <h2>Description: {props.description}</h2>
    </form>
}


export default SingleTrip;