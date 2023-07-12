import { useState } from "react"; 
import jwtDecode from "jwt-decode"; 
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate(); 

    async function handleSubmit(event) {
        event.preventDefault(); 
        try {
            const response = await fetch(`http://localhost:3000/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const translatedData = await response.json(); 

            if (translatedData.data) {
            
                localStorage.setItem("token", translatedData.data)

                const decodedToken = await jwtDecode(translatedData.data);
                console.log('this is the decodedToken')
                console.log(decodedToken)

                // Delete after admin true/false pops up
                let stringifiedObj = JSON.stringify(decodedToken);

                localStorage.setItem("user", stringifiedObj)
                // Delete after admin true/false pops up

                
                props.setUserInfo(decodedToken) 

                navigate("/")
            } else {
                alert("Invalid login, please try again.")
            }
        } catch (error) {
            console.error(error); 
        }
    }

    return (
        <div>
            <h2>Login Here:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username here.." value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <input type="password" placeholder="Password here.." value={password} onChange={(event) => setPassword(event.target.value)}></input>

                <button type="submit">Login</button>
                <Link to='/register'>Click here to create an account!</Link>
            </form>
        </div>
    )
}

export default Login;