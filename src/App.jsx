import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllTrips from './components/AllTrips';
import { getAllTrips } from './api-adapters';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [allTripsData, setAllTripsData] = useState([]);

  useEffect (() => {
    async function fetchAllTrips() {
      console.log('running fetch alltrips function')
      try {
        const BASE_URL = `http://localhost:3000`;
        const response = await fetch(`${BASE_URL}/api/trips`);
        console.log('response' + response);
        const translatedData = await response.json();
        console.log(translatedData);
        setAllTripsData(translatedData)
      } catch(error) {
        console.log(error);
      }
    }
    fetchAllTrips();
  }, [])
  console.log(allTripsData);
  return (
    <>
      <h1>Home Page</h1>

      <Routes>
        <Route path='/' element = {<AllTrips allTripsData={allTripsData} />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
    </>
  )
}

export default App;
