import { useEffect, useState} from 'react';


export default function FetchReviews({setReviewId, ReviewId}){
    const[TheseReviews, setTheseReviews] = useState([]);
    
    useEffect(() =>{
        async function fetchReviews(){
            try{
                const response = await fetch(`http://localhost:3000/api/reviews`);
                const data = await response.json();
                setTheseReviews(data);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchReviews();
    }, []);

    return(
        <div><h2>Reviews</h2>
            {TheseReviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Location: {review.tripId}</p>
                    <p>Description: {review.description}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            ))}
        </div>
    )
            }