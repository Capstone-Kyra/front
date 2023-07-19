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
import FetchComments from './components/Comments/FetchComments';
import AllUsers from './components/AllUsers';
import UpdateReview from './components/Reviews/UpdateReview';
import FetchOwnReviews from './components/Reviews/FetchOwnReviews';
import DeleteReview from './components/Reviews/DeleteReview';

function App() {
  const [allTripsData, setAllTripsData] = useState([]);
  const [userInfo, setUserInfo] = useState(undefined);
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

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
    async function getUserInfo(username){
try {
  const response = await fetch(`http://localhost:3000/api/users/userInfo/${username}`)
  const data = await response.json()
  console.log(username)
   console.log(data)
   setUserInfo({
        username: data.username,
        admin: data.is_Admin,
        userId: data.userId
      })
 
} catch (error) {
  console.log(error)
}
    }
    const token = localStorage.getItem("token")
    console.log(token, typeof token)
    if (localStorage.getItem("token")) {
      console.log('hello')
      let decodedToken = jwtDecode(localStorage.getItem("token"));
      console.log('decoded token', decodedToken)
      getUserInfo(decodedToken.username)
     
    }
  }, [])

  

    useEffect (() => {
        async function fetchAllUsers() {
          
          try {
            const BASE_URL = `http://localhost:3000`;
            const response = await fetch(`${BASE_URL}/api/users`);
            
            const translatedData = await response.json();
            console.log(translatedData)
            
            setUser(translatedData)
          } catch(error) {
            console.log(error);
          }
        }
         fetchAllUsers();
      }, [])
  console.log(userInfo)
  return (
    <>
      <h1>Adventure Time</h1>
      {
          userInfo && userInfo.admin ?  <h2>Welcome to the Admin View. Toggle through the different functions to add, create or reviews/comments.</h2> : ""
        }

      {
          userInfo && !userInfo.admin ? <h2>Welcome to the Profile View. Create your own reviews and comments! </h2> : ""
       }

      <nav>
      <Link to='/'>Home </Link>
      {/* <Link to='/searchbar'>Search </Link> */}
      
      <Link to = '/trips'>See a list of all Trips </Link>
      {/* <Link to = '/reviews/fetchReviews'>Reviews </Link> */}
      {/* <Link to = '/reviews/createReview'> Leave a Review </Link> */}
        
        {
          userInfo ? "" : <Link to="/login">Login/Register</Link>
        }

        {
          userInfo && userInfo.admin ? <Link to="/admin-dashboard">Admin Dashboard</Link> : ""
        }

        {
          userInfo && !userInfo.admin ? <Link to="/profile"> Profile</Link> : ""
        }

{
          userInfo && userInfo.admin ? <Link to="/users"> View All Users </Link> : ""
        }

{
          userInfo && userInfo.admin ? <Link to ='/newTrip'>Create new trip </Link> : ""
        }
 {
          userInfo && !userInfo.admin ? <Link to={`/reviews/fetchOwnReviews/${userInfo.userId}`}> My Reviews</Link> : ""
        }
        {
          userInfo && !userInfo.admin ? <Link to='/reviews/fetchReviews'> See all Reviews</Link> : ""
        }

        {userInfo ? (<button onClick={()=>{
           setIsLoggedIn(false)
           localStorage.removeItem('token')
           localStorage.removeItem('user')
           setUserInfo(undefined)


        }}>Logout </button>): "" }
        




      {/* <NavBar />  */}
      </nav>
      <Routes>
        <Route path='/' element = {<Homepage allTripsData={allTripsData} userInfo={userInfo}/>} />
        <Route path='/trips' element = {<AllTrips allTripsData={allTripsData} />} />
        <Route path='/trips/:id' element = {<SingleTrip allTripsData={allTripsData} userInfo = {userInfo} />} />
        <Route path='/newTrip' element = { <NewTrip allTripsData = {allTripsData} setAllTripsData = {setAllTripsData}/>} />
        <Route path='/register' element = {<Register />} />
        {/* <Route path='/login' element = {<Login />} /> */}
        <Route path='/login' element={<Login setUserInfo={setUserInfo}/>} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/reviews/fetchReviews' element ={<FetchReviews />} />
        <Route path='/reviews/updateReview' element ={<UpdateReview />} />
        <Route path= 'reviews/createReview' element ={<CreateReview />} />
        <Route path= 'reviews/fetchOwnReviews/:id' element ={<FetchOwnReviews userInfo = {userInfo} />} />
        <Route path= 'reviews/deleteReview' element ={<DeleteReview />} />
        <Route path='/comments' element = {<FetchComments />} />
        <Route path='/users' element = {<AllUsers user={user}/>} />
       </Routes>
    </>
  )
}

export default App;
