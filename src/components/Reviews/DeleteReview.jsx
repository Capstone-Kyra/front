import { useState, useEffect } from "react";
import {BASE_URL} from "../api-adapters";


export default function DeleteReview(props){

    const TOKEN = localStorage.getItem('token')
    async function delAReview(){
        try{
            const response = await fetch(`${BASE_URL}/api/reviews${props.reviewId}`,{
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
            })
            const results = await response.json()
            console.log(results)
            return results
        } catch(error){
            console.log(error)
        }
    }

    return(
        <button id="delete-review-button" type="button" onClick={delAReview}>
            Delete Review
        </button>
    );
}