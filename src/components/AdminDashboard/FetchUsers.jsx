import {useEffect, useState} from "react";
import {BASE_URL} from "../../api-adapters";

export default function FetchAllUsers (){
    const [allUsers, setUsers] = useState ([])
    const [searchQuery, setSearchQuery]= useState ("")

    useEffect (() => {
        async function fetchUsers () {
            try {
                const response= await fetch (`${BASE_URL}/api/users`)
                const data= await response.json ()
                setUsers (data)
            } catch (error) {
                console.log(error)
            }
        }
            fetchUsers ()
    }, [])

    const filteredUsers= users.filter((user) =>
    user.username.toLowerCase ().includes (searchQuery.toLowerCase())
    )

    return(
        <div>
            <form id= "search-bar-form">
                <label htmlFor= "search-query">SEARCH USERS:</label>
                <input
                    name= "search-query"
                    type= "text"
                    placeholder= "Enter User Info Here"
                    value= {searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
            </form>

            {
                filteredUsers.map((user, idx) => key={idx} , user={user})
            }
        </div>
    )
}
