import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const userData = {email,password};
            const response = await axios.post("http://localhost:5000/api/users/login",userData);
            const token = response.data.token;
            localStorage.setItem('token',token);
            navigate('/dashboard')
        }catch(err){
            if(err.response || err.response.data)
                {
                    console.log(`The error cause is ${err.response.data.message}`)
                }
            console.log(err);
        }
    }
    return(
    <div>
        <h1> User Login</h1>
        <form onSubmit = {handleSubmit}>
            <label>Enter the email</label>
            <input type = "text" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <label>Enter the password</label>
            <input type = "text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button type = "submit">Submit</button>
        </form>
    </div>
    )
}
export default Login;