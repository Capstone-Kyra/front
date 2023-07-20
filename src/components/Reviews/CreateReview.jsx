import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewReview({ id , setNewReviews, userInfo }) {
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    console.log(userInfo, "userinfo should pop out here")
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
                    location: location,
                    description: description,
                    rating: rating,
                    userId: userInfo.userId,
                    tripId: id
                })
            })
            navigate('/reviews/fetchReviews');
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
                    Location:
                    <input type="text"
                    value={location}
                    placeholder="Trip location.."
                    onChange={(event)=> setLocation(event.target.value)}/> 
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
