import { useState } from 'react';
import axios from 'axios';
function Register(){
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const userData = {name,email,password};
            const response = await axios.post("http://localhost:5000/api/users",userData);
            const token = response.data.token;
            localStorage.setItem('token',token);
            setEmail('');
            setName('');
            setPassword('');
            setMessage("Successfully registered the user");
        }catch(err)
        {
            console.log(err);
            if(err.response && err.response.data){
                console.log(`registration failed ${err.response.data.message}`)
            }
        }
    }
    return(
        <div>
           <h1> User Registration </h1> 
            <form onSubmit = {handleSubmit}>
                <label>Enter your name: </label>
                <input type = "text" value = {name} onChange={ (e) => setName(e.target.value)} required />
                <br/>
                <label>Enter your Email id: </label>
                <input type = "text" value = {email} onChange={(e)=> setEmail(e.target.value)} required/>
                <br />
                <label>Enter your Password: </label>
                <input type = "text" value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <br />
                <button type = "submit">Register</button>
            </form>
            {message && <p><strong>{message}</strong></p>}
        </div>
    )
}
export default Register;