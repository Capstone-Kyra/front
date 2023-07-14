import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FetchReviewsByUser(user) {
    const [reviews, setReviews] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    console.log(reviews)
}

    function reviewDetails(reviewId) {}

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`${BASE_URL}/api/reviews/${user.userId}`)
                const data = await response.json()
                setReviews(data) 
            } catch (error) {
                console.log(error)
            }  
        }
        fetchReviews()
    }, [])