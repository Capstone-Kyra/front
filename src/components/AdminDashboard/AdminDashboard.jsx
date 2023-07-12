import {useState} from "react";

const AdminDashboard =() =>{
    const [newTripName, setNewTripName] = useState ("")
    const [newTripCategory, setNewTripCategory] = useState ("")

    async function sendPostRequest (event){
        event.preventDefault();
        try{
            const response= await fetch(`http://localhost:3000/api/trips`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    name: newTripName,
                    category: newTripCategory
                })
            });

            const translatedData= await response.json();
            console.log(translatedData)

            if(!translatedData.error){
                alert ("New trip successfully created!")
            } else{
                alert ("Failed to create new trip, please try again!")
            }
        } catch (error){
            console.log(error)
        }
    }

    return(

        <>
            <h2>Welcome to the Admin Dashboard!</h2>

            <form onSubmit={sendPostRequest}>
                    <input type= "text" placeholder="Enter new trip name here" value={newTripName} onChange={(event) => setNewTripName(event.target.value)}/>
                    <input type= "text" placeholder="Enter new category here" value={newTripCategory} onChange={(event) => setNewTripCategory(event.target.value)}/>

                <button type= "submit">Create New Trip</button>

            </form>
        </>
    )
}

export default AdminDashboard