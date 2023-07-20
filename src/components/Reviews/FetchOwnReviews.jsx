// List of own reviews on profile

import UpdateReview from "./UpdateReview";
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import DeleteReview from "./DeleteReview";

export default function FetchOwnReviews({props}){
    const[theReviews, setTheReviews] = useState([]);
    const { id } = useParams();
    
    useEffect(() =>{
        async function fetchOwnReviews(){
            try{
                const response = await fetch(`http://localhost:3000/api/reviews/`);
                const data = await response.json();
                console.log(data)
                setTheReviews(data);
                const filteredReview = data.filter((singleReview) => {
                    console.log('singlereview)')
                    console.log( singleReview.userId, 'id')
                console.log(id)
                if(singleReview.userId == id){
                    console.log(singleReview.description)
                    return singleReview
                }
            })
            if(filteredReview.length){
                setTheReviews(filteredReview)
            }
            
            } catch(error){
                console.error(error);
            }
        }
        fetchOwnReviews();
    }, []);

    return(
        <div><h2>Reviews</h2>
            {theReviews.length ? theReviews.map((review)=>(
                <div key={review.reviewId}>
                    <p>Location: {review.location}</p>
                    <p>Description: {review.description}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            )):""}
             {/* <button id="delete-button" type="button" onClick={DeleteReview}>
            Delete
            </button> */}


        </div>
    )
            }
        

