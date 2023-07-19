import { Link } from "react-router-dom"
import React from "react"
import CreateReview from "./Reviews/CreateReview"



export default function Profile(){
    return(
        <div>
        <h1>Your profile!</h1>
        {/* <Link to= '/NewTrip'>Create new trip</Link> */}
        <Link to = '/reviews/createReview'>Create A Review</Link>
        <br/>
        {/* <Link to = '/reviews/updateReview'>Update A Review</Link> */}
        </div>
    )
} 