import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditTrip() {
    const TOKEN_STRING = localStorage.getItem('token');
    const { id } = useParams();
    const BASE_URL = `http://localhost:3000}/api/trips/${id}`;
    const navigate = useNavigate();
    const [newLocation, setNewLocaction] = useState("");
    const [newDescription, setNewDescription] = useState(""); 
    const [newType, setNewType] = useState("");

    const updateTrip = async (event) => {
        event.preventDefault();
        try {
            const repsonse = await fetch(`${BASE_URL}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN_STRING}`
                },
                body: JSON.stringify({
                    post: {
                        location: newLocation,
                        description: newDescription,
                        type: newType
                    }
                })
            });

            const result = await response.json();
            navigate('/');
            return result;
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={editTrip}>
            <h2>Edit Trip</h2>
            <label>Location</label>
            <input 
                title="location"
                type="text" 
                placeholder="location"
                value={newLocation}
                onChange={(event) => {
                    setNewLocaction(event.target.value)
                }}
            ></input>

            <label>Description</label>
            <input
                name="description"
                type="text"
                placeholder="description"
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value)
                }}
            ></input>

            <label>Type</label>
            <input
                name="type"
                type="text"
                placeholder="type"
                value={newType}
                onChange={(event) => {
                    setNewType(event.target.value)
                }}
            ></input>
        </form>
    )
}