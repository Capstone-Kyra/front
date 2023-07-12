import {useState, useEffect} from 'react';
import {BASE_COMMENTS_URL} from '../../api-adapters';

export default function FetchComments (){
    const [allComments, setComments]= useState([]);

    useEffect (() => {
        async function fetchComments (){
            try{
                const response= await fetch(`${BASE_COMMENTS_URL}`);
                const data= await response.json();
                console.log(data);
                setComments(data);

        } catch(error){
            console.log(error)
        }
    }

        fetchComments();

}, []);

    return(
        <div>
            <h2>Check out these comments:</h2>
            {allComments.map((comment) =>(
                <div key= {comment.commentId}>
                    <p>Username: {comment.username}</p>
                    <p>Text: {comment.text}</p>
                </div>
            ))}
        </div>
    )

    

}