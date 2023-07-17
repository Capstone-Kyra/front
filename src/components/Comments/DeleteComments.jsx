import { useState, useEffect } from "react";
import {BASE_URL} from "../api-adapters";


export default function DeleteComment(props){
    const TOKEN = localStorage.getItem('token')

    async function delAComment(){
        try{
            const response = await fetch(`${BASE_URL}/api/comments/${props.reviewId}`,{
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
        <button id="delete-button" type="button" onClick={delAComment}>
            Delete
        </button>
    );
}