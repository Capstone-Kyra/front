import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { registerUser } from "../api-fetch";
export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleClick(event){
        event.preventDefault();
        try{
           const result = await registerUser(username,password)
           console.log(result)
           localStorage.setItem('token', result.data.token)

           navigate('/')
        }catch(error){
            console.error(error)
        }
    }
    return(
        <div>
            <h2 id="register">Register</h2>
<form onSubmit={handleClick}>
    <label>Username: <input 
    type="text"
    value={username}
    onChange = {(event) => {
        setUsername(event.target.value)}}
        />
    </label>
    <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type='submit'>Submit</button>
</form>
</div>
    )
}