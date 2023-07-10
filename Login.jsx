import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsername=(event) =>{
        setUsername(event.target.value);
    }
    const handlePassword=(event) =>{
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    // Perform form validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

  // Reset the form fields
    setUsername('');
    setPassword('');

    // Navigate to the Todo component
        navigate('/Todo');
    }

    return(
        <>
        <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2> 
        <input type="text"onChange={handleUsername} value={username} name="" id="" placeholder='Username' />
        <input type="password" onChange={handlePassword} value={password} name="" id="" placeholder='Password' />
        <button className='submitBtn' type="submit">Login</button>
        </form>
        </>
    )

}

export default Login;