import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const AdminDashboard =() =>{
    const [newTripType, setNewTripType] = useState ("")
    const [newTripLocation, setNewTripLocation] = useState ("")
    const [newTripDescription, setNewTripDescription] = useState ("")
    const [adminInfo, setAdminInfo]= useState (undefined)
    const TOKEN= localStorage.getItem('token')

    async function sendPostRequest (event){
        event.preventDefault();
        const TOKEN= localStorage.getItem('token')
        try{
            const response= await fetch("http://localhost:3000/api/trips1",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TOKEN}`
                },
                body: JSON.stringify({
                    type: newTripType,
                    location: newTripLocation,
                    description: newTripDescription
                })
            });

            console.log(response)
            const translatedData= await response.json();
            console.log(translatedData)

            useEffect(() => {
                const token = localStorage.getItem("token")
                console.log(token, typeof token)
                if (localStorage.getItem("token")) {
                  let decodedToken = jwtDecode(localStorage.getItem("token"));
                  console.log('decoded token', decodedToken)
                  setAdminInfo({
                    username: decodedToken.username,
                    admin: decodedToken.is_Admin
                  })
                }

                if(!translatedData.error){
                    alert ("New trip successfully created!")
                } else{
                    alert ("Failed to create new trip, please try again!")
                }
              }, [])
        } catch (error){
            console.log(error)
        }
    }

    return(

        <>
            <h2>Welcome to the Admin Dashboard! Use the NavBar to determine your next step!</h2>
            {/* <form onSubmit={sendPostRequest}>
                    <input type= "text" placeholder="Enter new trip type" value={newTripType} onChange={(event) => setNewTripType(event.target.value)}/>
                    <input type= "text" placeholder="Enter new location" value={newTripLocation} onChange={(event) => setNewTripLocation(event.target.value)}/>
                    <input type= "text" placeholder="Enter new description" value={newTripDescription} onChange={(event) => setNewTripDescription(event.target.value)}/>


                <button type= "submit">Create New Trip</button>

            </form>
            {
                adminInfo && adminInfo.admin ? {sendPostRequest} : ""
            } */}
        </>
    )
}

export default AdminDashboard
