import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../api';
function Dashboard(){
        const [goals,setGoals] = useState([]);
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
        const handleLogOut=()=>{
            localStorage.removeItem('token');
            navigate('/');
        }
        const deleteGoal = async(id)=>{
            try{
                const response = await API.delete(`/${id}`);
                setGoals(goals.filter((goal)=> goal._id !== id));
            }catch(err){
                console.log(err);
            }
        }
        return(
            <div>
                <h1>Hello welcome to the dashBoard</h1>
                <button onClick = {()=> navigate('/addGoal')}>Add Goal</button>
                <button onClick = {handleLogOut}>LogOut</button>
                <h1>Your Goals</h1>
                <ul>
                    {goals.map((goal)=>(
                        <li key = {goal._id}>{goal.text}<button onClick = {()=>navigate(`/updateGoal/${goal._id}`)}>Update</button><button onClick = {()=>deleteGoal(goal._id)}>Delete</button></li>
                    ))}
                </ul>
            </div>
        )
    }
export default Dashboard;