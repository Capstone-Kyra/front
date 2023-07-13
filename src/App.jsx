import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import AllTrips from './components/AllTrips';
import { getAllTrips } from './api-adapters';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
// import NavBar from './components/NavBar';
import SingleTrip from './components/SingleTrip';
import SearchBar from './components/SearchBar';
import jwtDecode from 'jwt-decode';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [allTripsData, setAllTripsData] = useState([]);
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect (() => {
    async function fetchAllTrips() {
      console.log('running fetch alltrips function')
      try {
        const BASE_URL = `http://localhost:3000`;
        const response = await fetch(`${BASE_URL}/api/trips`);
        // console.log('response' + response);
        const translatedData = await response.json();
        // console.log(translatedData);
        setAllTripsData(translatedData)
      } catch(error) {
        console.log(error);
      }
    }
    fetchAllTrips();
  }, [])
console.log(allTripsData);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decodedToken = jwtDecode(localStorage.getItem("token"));
      setUserInfo({
        username: decodedToken.username,
        admin: decodedToken.admin
      })
    }
  }, [])
  
  return (
    <>
      <h1>Trip Advisor</h1>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/searchbar'>Search</Link>
        
        {
          userInfo ? "" : <Link to="/login">Login</Link>
        }

        {
          userInfo && userInfo.admin ? <Link to="/admin-dashboard">Admin Dashboard</Link> : ""
        }

        {
          userInfo && !userInfo.admin ? <Link to="/profile">Profile</Link> : ""
        }
      {/* <NavBar />  */}
      </nav>
      <Routes>
        <Route path='/' element = {<AllTrips allTripsData={allTripsData} />} />
        <Route path='/:id' element = {<SingleTrip allTripsData={allTripsData} />} />
        <Route path='/register' element = {<Register />} />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route path='/login' element={<Login setUserInfo={setUserInfo}/>} />
        {/* <Route path='/admin-dashboard' element={<AdminDashboard />} /> */}
        <Route path='/profile' element = {<Profile />} />
        <Route path='/searchbar' element = {<SearchBar allTripsData = {allTripsData} />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/' element= {<FetchComments/>} />
      </Routes>
    </>
  )
}

export default App;
