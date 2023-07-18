import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewReview({ id , setNewReviews }) {
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [tripId, setTripId] = useState('');
    // const navigate = useNavigate();

    async function createReview(event){
        event.preventDefault()
        try{
            const TOKEN = localStorage.getItem('token')
            const response = await fetch(`http://localhost:3000/api/reviews`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    description: description,
                    rating: rating,
                    userId: localStorage.getItem('userId'),
                    tripId: id
                })
            })
            // navigate('/reviews/fetchReviews');
            const result = await response.json()
            return result
        }   catch (error){
            console.log(error)
        }

    }
    return(
        <div>
            <h2>Create a Review</h2>
            <form onSubmit={createReview}>
            <label>
                {/* tripId needs to be replaced with location */}
                    Location:
                    <input type="text"
                    value={tripId}
                    placeholder="Trip location.."
                    onChange={(event)=> setTripId(event.target.value)}/> 
                </label>
                <label>
                    Description:
                    <input type="text"
                    value={description}
                    placeholder="Your review.."
                    onChange={(event)=> setDescription(event.target.value)}/></label>
                <label> 
                    Rating:
                <input type="number"
                 value={rating}
                 placeholder="Rating 1-10.."
                  onChange={(event)=>
                setRating(event.target.value)}/></label>

                <button type= "submit">submit</button>
                </form>

        </div>
    )}
