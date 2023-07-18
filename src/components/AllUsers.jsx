import React, { useState , useEffect} from 'react';

import { Link } from 'react-router-dom';

export default function AllUsers(props) {  

    
    // console.log('alltrips props');
    console.log(props);  
    return(
        <div>
            
            {props.user && props.user.length ? props.user.map((singleUser) => {
                
                return(
                    <div key={singleUser.UserId}>
                        <h4>Username: {singleUser.username}</h4>
                        <h4>Email: {singleUser.email}</h4>
                        {/* convert boolean value */}
                        <h4>Admin?: {`${singleUser.is_Admin}`}</h4>
                        
                    </div>
                )
            }) : <p>Loading users</p>
            }
        </div>
    )
}
