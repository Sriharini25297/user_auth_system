import API from '../api';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function AddgoalForm(){
    const [text,setText] = useState('');
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(!text.trim())
            return;
        try{
            const response = await API.post('/',{text : text});
            navigate('/dashboard');
        }catch(err){
            console.log(err);
        }
    }
    return(<div>
        <h1> Add Your Goals here</h1>
        <form onSubmit = {handleSubmit}>
            <label>Enter the goal: </label>
            <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)} />
            <br />
            <button type = "submit">Add Goal</button>
        </form>
    </div>)
}
export default AddgoalForm;