import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function NewTrip(props) {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const TOKEN = localStorage.getItem('token');
    const navigate = useNavigate();

    async function sendPostRequest(event) {
        event.preventDefault();
        const TOKEN = localStorage.getItem('token')
        console.log('???', TOKEN)
        try {
            //fix the routing on this
            const response = await fetch("http://localhost:3000/api/trips1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                  
                    location: location, 
                    type: type,
                    description: description,
                   

                    
                   
                    
                })
        })
     console.log(response)
        const translatedData = await response.json();
        props.setAllTripsData([...props.allTripsData, translatedData])
        console.log(translatedData)
        navigate('/trips');
        } catch(error) {
            console.log(error);
        }
    }
    return(
<div>

<h2>Make a new post</h2>
<form onSubmit={sendPostRequest} >
    <label htmlFor="post-title">Trip Type:
        <input
        type="text"
        value={type}
        onChange = {(event) => {
            setType(event.target.value)}}
        />
    </label>
    <label htmlFor="post-desc">Post Description:
    <input
    type="text"
    value={description}
    onChange = {(event) => {
        setDescription(event.target.value)}}/></label>
        <label htmlFor="post-loc">Post Location:
    <input
    type="text"
    value={location}
    onChange = {(event) => {
        setLocation(event.target.value)}}/></label>
   
    <button type="submit"  >Create new trip</button>
    <Link to= '/profile'>back to profile</Link>
     {/* <Link to ={`/trips`}><button type='submit'>Add listing</button></Link>  */}
 
</form>
        </div>



    )
}