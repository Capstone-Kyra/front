import { useParams } from "react-router-dom"

export default function SearchTrip(props){

    const { id } = useParams();

    return(
        <div>
           <h2 id="searchTrip">Trip:</h2>
           {props.trip && props.trip.title ? 
           
           
           <p id="searchSingle"> {props.trip.title}</p> : null }

</div>
   
    )
    
}