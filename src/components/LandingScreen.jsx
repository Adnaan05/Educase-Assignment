import React, { useEffect } from "react";
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';



const LandingScreen = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleSignUp = () => {
        navigate('/signup');
    }
    useEffect( () => {
        document.body.style = "background-color: #F7F8F9,font-family: Arial, Helvetica, sans-serif;padding-left: 20px;display: flex;flex-direction: column;justify-content: flex-end;"
    })
    return (
        <div className="container">
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <button onClick={() => {handleSignUp()}} id = "button1">Create Account</button>
                <button onClick={() => {handleLogin()}} id = "button2">Already Registered?Login</button>
            </div>
        </div>
    )
}
export default LandingScreen;