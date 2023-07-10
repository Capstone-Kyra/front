import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function SingleTrip (props){
  
    const { id } = useParams();
    const navigate = useNavigate();
    const filteredTrip = props.allTripsData.filter((singleTrip) => {
        console.log( singleTrip.location)
        if(singleTrip.id == id ){
            console.log(singleTrip.location)
            return singleTrip.location
        }
    })
    return(
        <div>
         
           { filteredTrip[0] && filteredTrip[0].location ? 
           
           <>
           <p> {filteredTrip[0].location}</p>
           <p> {filteredTrip[0].description}</p> 
           <p> {filteredTrip[0].type}</p> 
           </> : null }
           <button onClick={() => navigate('/')}> Back </button>

           
</div>
   
    )
    
}