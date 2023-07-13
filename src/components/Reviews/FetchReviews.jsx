import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function FetchReviews({setSelectedReviewId, selectedReviewId}){
    const[TheReviews, setTheReviews] = useState([]);
    const navigate = useNavigate()
    function reviewInfo(reviewId) {
        navigate(`/reviews/${reviewId}`)
    }
    
    useEffect(() =>{
        async function fetchTheReviews(){
            try{
                const response = await fetch(`http://localhost:3000/api/reviews`);
                const data = await response.json();
                setTheReviews(data);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchTheReviews();
    }, []);

    return(
        <div><h2>Reviews</h2>
            {TheReviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Description: {review.description}</p>
                    <p>Rating: {review.rating}</p>
                    <button onClick={() => reviewInfo(review.reviewId)}>Details</button>
                </div>
            ))}
        </div>
    )
            }