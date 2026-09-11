import API from '../api';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function UpdategoalForm(){
    const [text,setText] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
        const response = await API.put(`/${id}`,{ text });
        navigate('/dashboard');
        }catch(err){
            console.log(err);
        }
    }
    return(
    <div>
    <h1>Update your Goal</h1>
    <form onSubmit = {handleSubmit}>
        <label>Enter the updated version of your goal</label>
        <br />
        <br />
        <input type = "text" value = {text} onChange={(e) => setText(e.target.value)}></input>
        <br />
        <br />
        <button type = "submit">Update Goal</button>
</form>
    </div>
);
}
export default UpdategoalForm;