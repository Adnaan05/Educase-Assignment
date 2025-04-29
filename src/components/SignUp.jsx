import React, { useContext, useEffect, useState } from "react";
import '../styles/signup.css';
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    useEffect( () => {
        document.body.style = "background-color: #F7F8F9;font-family: Arial, Helvetica, sans-serif;display: flex;flex-direction: column;justify-content: flex-start;align-items: center;"
    })
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
            username: 'Mary Dane Joe',
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
        <div className="container">
            <h1>Create Your PopX account</h1>
            <form action={handleSubmit}>
                <label htmlFor="userName">Full Name<span style={{color : "red"}}>*</span></label>
                <input onChange={handleChange} type="text" placeholder="Your Full Name" name="username" required />
                <label htmlFor="phoneNo">Phone Number<span style={{color : "red"}}>*</span></label>
                <input onChange={handleChange} type="text" placeholder="Your Phone Number" name="phoneNo" required />
                <label htmlFor="email">Email Address<span style={{color : "red"}}>*</span></label>
                <input onChange={handleChange} type="text" placeholder="Your email address" name="email" required />
                <label htmlFor="pass">Password<span style={{color : "red"}}>*</span></label>
                <input onChange={handleChange} type="password" name="pass" required />
                <label htmlFor="comapanyName">Company name</label>
                <input type="text" name="companyName" />
                <label style={{color: "black"}}>
                <label>Are you an agency?<span style = {{color : "red"}}>*</span></label>
                <br />
                <br />
                <input type="radio" name="userType" value="agency"/>
                Yes
                </label>
                <label style={{color: "black"}}>
                <input type="radio" name="userType" value="individual" />
                No
                </label>
                <br />
                <button type="submit" id="submitButton">Create Account</button>
            </form>
            

            
        </div>
    )
}
export default SignUp;