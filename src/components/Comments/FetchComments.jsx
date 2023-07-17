import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function FetchComments(){
    const[comments, setComments] = useState([]);
    
    
    
    useEffect(() =>{
        async function fetchTheComments(){
            try{
                const response = await fetch(`http://localhost:3000/api/comments`);
                const data = await response.json();
                setComments(data);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchTheComments();
    }, []);

    return(
        <div><h2>Comments</h2>
            {comments.map((comment)=>(
                <div key={comment.commentId}>
                    <p>Description: {comment.text}</p>
                    <p>Rating: {comment.reviewId}</p>
                    
                </div>
            ))}
        </div>
    )
            }