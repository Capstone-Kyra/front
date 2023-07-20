import React from "react"
import SearchBar from "./SearchBar"
import { useState } from "react";
import './HomePage.css';



export default function Homepage(props){
   
  console.log(props, 'rpops')
    return(
      <div>
          <div className="Homepage-title">
            <h1>Adventure Time</h1>
            <h2>Welcome to your destination for all adventures!</h2>
          </div>
          <div className="homedata">
          
                <div id="searchbar"><SearchBar allTripsData = {props.allTripsData} /> </div>
          </div>
      </div>
    )
}