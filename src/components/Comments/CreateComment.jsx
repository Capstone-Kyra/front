import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewComment({ trip, setNewReviews }) {
    const [text, setText] = useState('');
    
    const [userId, setUserId] = useState('');
    // const navigate = useNavigate();

    async function createComment(event){
        event.preventDefault()
        try{
            const TOKEN = localStorage.getItem('token')
            const response = await fetch(`http://localhost:3000/api/comments`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    text : text,
                    userId: localStorage.getItem('userId')
                    
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
            <h2>Write a comment</h2>
            <form onSubmit={createComment}>
            <label>
                {/* tripId needs to be replaced with location */}
                    Text:
                    <input type="text"
                    value={tripId}
                    placeholder="Leave a comment"
                   /> 
                </label>
                

                <button type= "submit">submit</button>
                </form>

        </div>
    )}
