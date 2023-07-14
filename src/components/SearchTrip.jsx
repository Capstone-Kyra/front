import { useParams } from "react-router-dom"

export default function SearchTrip(props){

    const { id } = useParams();

    return(
        <div>
           <h4 id="searchTrip">Trip:</h4>
           {props.trip && props.trip.location ? 
           
           
           <p id="searchSingle"> {props.trip.location}</p> : null }

</div>
   
    )
    
}