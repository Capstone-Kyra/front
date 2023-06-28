import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { getAllTrips } from './components/AllTrips';

function App() {
  const [allTrips, getAllTrips] = useState([]);

  useEffect (() => {
    async function getAllTrips() {
      try {
        let response = await AllTrips();
        setAllTrips(reponse.posts)
      } catch(error) {
        console.log(error);
      }
    }
    getAllTrips();
  }, [])

  return (
    <>
      <h1>Home Page</h1>

      <Routes>
        <Route path='/' element = {<AllTrips allTrips={allTrips} />} />
      </Routes>
    </>
  )
}

export default App
