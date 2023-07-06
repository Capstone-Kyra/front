import React from "react";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { registerUser } from "../api-adapters";

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function handleClick(event){
        event.preventDefault();
        try{
           const result = await registerUser(username,password,email)
           console.log(result)
           localStorage.setItem('token', result.token)

           navigate('/')
        }catch(error){
            console.error(error)
        }
    }
    return(
        <div>
             <h2 id="register">Register below.</h2>
<form onSubmit={handleClick}>
    <label>UserName: <input 
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
        <label>
        Email:
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <button type='submit'>Submit</button>
</form>
</div>
    )
}
