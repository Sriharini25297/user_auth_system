import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../api';
function Dashboard(){
        const [goals,setGoals] = useState("");
        const [text,newText] = useState("");
        const [editingId,setEditingId] = useState(null);
        const [editText,setEditText] = useState("");
        const navigate = useNavigate();
        useEffect(() => {
            const fetchGoals = async ()=>{
                try{
                const response = await API.get('/');
                setGoals(response.data);
                }catch(error){
                    console.log(`The error occured is ${error}`)
                    if(error.response && error.response.status === 401)
                    {
                        localStorage.removeItem('token');
                        navigate('/');
                    }
                }
            };
            fetchGoals();
        },[navigate]);
        return(
            <div>
                <h1>Hello welcome to the dashBoard</h1>
            </div>
        )
    }
export default Dashboard;