import { useParams} from "react-router-dom";
import { BASE_URL } from "../../api adapters";
import {useState} from 'react';

export default function UpdateGame() {
    const { tripId } = useParams()
    const [location, setLocation] = useState([]);
    const [type, setType] = useState([]);
    const [description,setDescription] = useState([]);
    
    async function editTrips(event) {
        event.preventDefault()
        try {
        const response = await fetch(`${BASE_URL}/api/trips${tripId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify ({
                location: location,
                type: type,
                description: description
            })
        })
        const result = await response.json()
        console.log(result)
        return result
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div>
            <form onSubmit={editTrips}>
            <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="date"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Trip</button>
      </form>
    </div>
  );
}