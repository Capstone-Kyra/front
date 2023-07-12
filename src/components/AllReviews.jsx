import React, { useState } from 'react';

//do i need to pull reviews from api-adapters?
import { Link } from 'react-router-dom';

export default function AllReviews(props) {  
    console.log(props);  
    return(
        <div>
            {props.allReviewsData.length ? props.allReviewsData.map((singleReview) => {
                console.log('single review:')
                console.log(singleReview)
                return(
                    <div key={singleReview.id}>
                        <h4>Location: {singleReview.location}</h4>
                        <h4>Type: {singleReview.type}</h4>
                        <p>Description: {singleReview.description}</p>
                        <Link to ={`${singleReview.id}`}><button>See Details</button></Link> 
                    </div>
                )
            }) : <p>Loading trips</p>
            }
        </div>
    )
}
