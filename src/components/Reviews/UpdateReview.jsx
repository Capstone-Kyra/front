import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import {BASE_URL} from "../api-adapters";

export default function UpdateReview(){
    const {id} = useParams()
    
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('')
    const TOKEN = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log(rating)
    async function updateAReview(event){
        event.preventDefault()
        try{
   
            const response= await fetch(`${BASE_URL}/api/reviews/update/${id}`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    description: description,
                    rating: rating
                })
            })
            const result = await response.json()
            navigate(`/reviews/${id}`)
            return result
        } catch(error){
            console.log(error)
        }
    }

    return(

        <form onSubmit={updateAReview}>
            <label>
                Desciption
            <input
            type="text"
            value={description}
            onChange={(event)=> setDescription(event.target.value)}/>
            </label>
            <button onClick={() => setRating(1)}>1</button>
            <button onClick={() => setRating(2)}>2</button>
            <button onClick={() => setRating(3)}>3</button>
            <button onClick={() => setRating(4)}>4</button>
            <button onClick={() => setRating(5)}>5</button>
            <button onClick={() => setRating(6)}>6</button>
            <button onClick={() => setRating(7)}>7</button>
            <button onClick={() => setRating(8)}>8</button>
            <button onClick={() => setRating(9)}>9</button>
            <button onClick={() => setRating(10)}>10</button>
            <button id="update-review-button" type="submit">
                Edit
            </button>
        </form>
    );
}