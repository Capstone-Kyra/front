import { useState, useEffect } from "react";
// import {BASE_URL} from "../api-adapters";
import {useParams, useNavigate} from "react-router-dom";
const BASE_URL = `http://localhost:3000`;

export default function UpdateReview(){
    const TOKEN = localStorage.getItem('token')
    const {id} = useParams()

    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [location, setLocation] = useState('');
    console.log(rating)

    async function updateAReview(event){
        event.preventDefault()
        try{
            const response= await fetch(`${BASE_URL}/api/reviews/update/${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    location: location,
                    description: description,
                    rating: rating,
                })
            })
            const result = await response.json()
            return result
        } catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h2>Update a Review</h2>
            <form onSubmit={updateAReview}>
            <label>
                    Location:
                    <input type="text"
                    value={location}
                    onChange={(event)=> setLocation(event.target.value)}/></label> 

                <label>
                    Description:
                    <input type="text"
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)}/></label>
                <label> 
                    Rating:
                <input type="number"
                 value={rating}
                  onChange={(event)=>
                setRating(event.target.value)}/></label>

            <button id="edit-review-button" type="submit">
                Submit
            </button>
                </form>

        </div>
    )}