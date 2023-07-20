import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewComment({ trip, setNewReviews }) {
    const [text, setText] = useState('');
    const [comment, setComment]= useState ([]);
    const { id } = useParams();
    
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
                    username: username,
                    userId: userInfo.userId,
                    reviewId: id
                    
                })
            })
            navigate('/comments/fetchComments');
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
                    value={text}
                    placeholder="Leave a comment"
                    onChange={(event)=> setText(event.target.value)}/>  
                </label>
                

                <button type= "submit">create comment</button>
                </form>

                {props.userInfo  ?  <NewComment id = {id} userInfo = {props.userInfo}/> : ""}

        </div>
    )}
