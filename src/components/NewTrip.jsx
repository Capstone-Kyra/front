import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function NewTrip() {
    const [title, setTitle] = useState('');
    const [descripion, setDescription] = useState('');
    const TOKEN = localStorage.getItem('token');
    const navigate = useNavigate();

    async function sendPostRequest(event, username, password) {
        event.preventDefault();
        try {
            //fix the routing on this
            const response = await fetch("https://localhost:3000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    post: {
                    title: title,
                    descripion: description
                    }
                })
        })

        const translatedData = await response.json();
        
        } catch(error) {
            console.log(error);
        }
    }
}