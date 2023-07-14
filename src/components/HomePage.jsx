import React from "react"
import SearchBar from "./SearchBar"


export default function Homepage(props){
  console.log(props, 'rpops')
    return(
        <div>
            <h2>Welcome to your destination for all adventures!</h2>
            <div >
      <img src="https://www.busytourist.com/wp-content/uploads/2019/05/how-to-plan-a-trip.jpg" alt="react logo" style={{ height: '150px', width: '800px'}}/>
    </div>
            <div><SearchBar allTripsData = {props.allTripsData} /> </div>
        </div>
    )
}