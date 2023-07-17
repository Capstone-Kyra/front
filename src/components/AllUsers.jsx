import React, { useState , useEffect} from 'react';

import { Link } from 'react-router-dom';

export default function AllUsers(props) {  

    
    // console.log('alltrips props');
    console.log(props);  
    return(
        <div>
            <h3>Click the link above to create your own trip listing!</h3>
            {props.user && props.user.length ? props.user.map((singleUser) => {
                
                return(
                    <div key={singleUser.UserId}>
                        <h4>Location: {singleUser.username}</h4>
                        
                    </div>
                )
            }) : <p>Loading users</p>
            }
        </div>
    )
}
