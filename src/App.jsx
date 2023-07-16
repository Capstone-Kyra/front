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
import Homepage from './components/HomePage';
import NewTrip from './components/NewTrip';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import FetchReviews from './components/Reviews/FetchReviews';
import CreateReview from './components/Reviews/CreateReview';

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
    const token = localStorage.getItem("token")
    console.log(token, typeof token)
    if (localStorage.getItem("token")) {
      console.log('hello')
      let decodedToken = jwtDecode(localStorage.getItem("token"));
      console.log('decoded token', decodedToken)
      setUserInfo({
        username: decodedToken.username,
        admin: decodedToken.is_Admin
      })
    }
  }, [])
  
  return (
    <>
      <h1>Adventure Time</h1>
      <nav>
      <Link to='/'>Home </Link>
      {/* <Link to='/searchbar'>Search </Link> */}
      <Link to ='/newTrip'>Create new trip </Link>
      <Link to = '/trips'>See a list of all Trips</Link>
      <Link to = '/reviews/fetchReviews'>Reviews</Link>
        
        {
          userInfo ? "" : <Link to="/login">Login/Register</Link>
        }

        {
          userInfo && userInfo.admin ? <Link to="/admin-dashboard">Admin Dashboard</Link> : ""
        }

        {
          userInfo && !userInfo.admin ? <Link to="/profile"> Profile</Link> : ""
        }


      {/* <NavBar />  */}
      </nav>
      <Routes>
        <Route path='/' element = {<Homepage allTripsData={allTripsData}/>} />
        <Route path='/trips' element = {<AllTrips allTripsData={allTripsData} />} />
        <Route path='/trips/:id' element = {<SingleTrip allTripsData={allTripsData} />} />
        <Route path='/newTrip' element = { <NewTrip allTripsData = {allTripsData} setAllTripsData = {setAllTripsData}/>} />
        <Route path='/register' element = {<Register />} />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route path='/login' element={<Login setUserInfo={setUserInfo}/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/reviews/fetchReviews' element ={<FetchReviews />} />
        <Route path= 'reviews/createReview' element ={<CreateReview />} />
       </Routes>
    </>
  )
}

export default App;
