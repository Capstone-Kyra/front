import { loginUser } from "../api-adapters";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



 function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleClick(event){
        event.preventDefault();
        try{
            const result = await loginUser(username, password)
            console.log(result)

            localStorage.setItem('token', result.token)
            
            // takes me to location after logging in
            navigate('/Profile')
        } catch (error){
            console.error(error)
        }

        }
         return(<div>
            <h2>Login below.</h2>
            <form onSubmit={handleClick}>
                <label>Username:
                    <input
                    type="text"
                    value={username}
                    onChange={(event) => {
           setUsername(event.target.value)}}
                    />
                </label>
                <label>Password:
                    <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }
                    }
                    />
                    </label>
             <button type='submit'>Login</button>
            </form>
            <Link to='/register'>Click here to create an account!</Link>
            </div>
    )
    }

   
    export default Login;