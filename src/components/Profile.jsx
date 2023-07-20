import { Link } from "react-router-dom"
import React from "react"
import CreateReview from "./Reviews/CreateReview"



export default function Profile(){
    return(
        <div className="profileview">
        {/* <Link to= '/NewTrip'>Create new trip</Link> */}
        <Link to = '/reviews/createReview'>Create A Review</Link>
        <br/>
        {/* <Link to = '/reviews/updateReview'>Update A Review</Link> */}
        </div>
    )
} 