import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddgoalForm from './components/AddgoalForm.jsx';
import UpdategoalForm from './components/UpdategoalForm.jsx';
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/register' element = {<Register />}/>
      <Route path = '/login' element={<Login />}/>
      <Route path = '/dashboard' element = {<Dashboard />} />
      <Route path = '/addGoal' element = {<AddgoalForm />} />
      <Route path = '/updateGoal/:id' element = {<UpdategoalForm />} />
  </Routes>
    </>
  )
}

export default App
