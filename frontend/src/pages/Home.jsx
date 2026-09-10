import { Link } from 'react-router-dom'
function Home(){
    return(
        <>
            <h1>User Goal Tracking System</h1>
            <p>Welcome to goal tracking system add secure achieve your goals here</p>
            <h2>New to the Platform ?? Register here</h2>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            <h2>Already an User Login here</h2>
            <Link to = '/login'>
                <button>Login</button>
            </Link>   
        </>
    )
}
export default Home;