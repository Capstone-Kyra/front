import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteTrip(props) {
    const BASE_URL = `http://localhost:3000`;
    const TOKEN_STRING = localStorage.getItem("token");
    // console.log(id);
    const navigate = useNavigate();
    //do i need prevent default?
    async function sendDeleteRequest(event) {
        console.log('delete clicked')
        try {
            console.log(event)
            //not sure what the correct route is
            const response = await fetch(`${BASE_URL}/api/trips/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_STRING}`
                }
            })
            const translatedData = await response.json();
            navigate('/');
            console.log(translatedData);
            return translatedData;

        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={sendDeleteRequest}>Delete</button>
        </div>
    )
}

export default DeleteTrip;