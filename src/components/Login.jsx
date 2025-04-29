import React, { useContext, useEffect, useState } from "react";
import '../styles/login.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";


const Login = () => {
    const navigate = useNavigate();
    useEffect( () => {
        document.body.style = "background-color: #F7F8F9;font-family: Arial, Helvetica, sans-serif;display: flex;flex-direction: column;justify-content: flex-start;align-items: center;";
    })
    const {setUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: 'Your Name',
        phoneNo: '',
        email: '',
        pass: '',
        companyName: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    const handleSubmit = () => { 
        setUser(formData);
        navigate("/display");
    }
    return (
        <div id="container">
            <h1>Signin to your PopX account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action= {handleSubmit} id = "loginForm">
                <label htmlFor="email" required>Email Addres</label>
                <input onChange={handleChange} type="email" name="email" required/>
                <label onChange={handleChange} htmlFor="pass" required>Password</label>
                <input type="password" name="pass"  required/>
                <button type = "submit" id="submitButton" style={{marginTop : "10px"}}>Login</button>
            </form>
            
        </div>
    )
}
export default Login;