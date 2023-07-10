import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsername=(event) =>{
        setUsername(event.target.value);
    }
    const handleEmail=(event) =>{
        setEmail(event.target.value);
    }
    const handlePassword=(event) =>{
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    // Perform form validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
    return;
    }

    // Reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');

    // Navigate to the Todo component
        navigate('/Todo');
    }
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/Login');
    }

    return(
        <>
        <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2> 
        <input type="text"onChange={handleUsername} value={username} name="" id="" placeholder='Full Name' />
        <input type="email" onChange={handleEmail} value={email} name="" id="" placeholder='Email' />
        <input type="password" onChange={handlePassword} value={password} name="" id="" placeholder='Create Password' />
        <button className='submitBtn' type="submit">Create Account</button>
        <div className='login'>
        <p>Already have an account?</p>
        <button onClick={handleLogin} className="loginBtn">Login</button></div>
        </form>
        </>
    )
}

export default Signup;