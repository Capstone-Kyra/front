import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function SingleTrip (props){
  
    const { id } = useParams();
    const navigate = useNavigate();
    const filteredTrip = props.allTripsData.find((singleTrip) => {
        console.log( singleTrip.location)
        if(singleTrip.tripId == id ){
            console.log(singleTrip.location)
            return true
        }
    })
    // console.log(filteredTrip)
    return(
        <div>
         
           { filteredTrip && filteredTrip.location ? 
           
           <>
           <p> {filteredTrip.location}</p>
           <p> {filteredTrip.description}</p> 
           <p> {filteredTrip.type}</p> 
           </> : null }
           <button onClick={() => navigate('/')}> Back </button>

           
</div>
   
    )
    
}