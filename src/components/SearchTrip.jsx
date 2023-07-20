import { useParams } from "react-router-dom"
import SearchBar from "./SearchBar";

export default function SearchTrip(props){

    const { id } = useParams();
    console.log(props.allReviewsData)
    console.log(props.trip)
    return(
            <div>
                <h4 id="searchTrip">Trip:</h4>
                    {props.trip && props.trip.location ? <p id="searchSingle"> {props.trip.location}</p> : null }
                    {props.trip && props.trip.description ? <p id="searchbar">{props.trip.description}</p> : null}
                    {props.allReviewsData && props.allReviewsData.length ? (
                    props.allReviewsData.map((review)=> {
                        if(review.tripId == props.trip.tripId)
                    return (
                        <div>
                            {review.rating}
                            {review.description}
                        </div>
                    )
                    })
                    ) : (
                        <p>No reviews yet</p>
                    )


                     }
        
            </div>
   
        )
    
}