import React, { useEffect, useContext } from "react";
import profileImage from "../assets/ellipse.png";
import { UserContext } from "../contexts/UserContext";
import '../styles/display.css';

const Display = () => {
    const {user} = useContext(UserContext);
    useEffect( () => {
        document.body.style = "padding: 0px;background-color: #F7F8F9;";
    })
    return (
        <div style={{width : "100%", padding : "0px", margin : "0px"}}>
            <nav><p>Account Settings</p></nav>
            <div className="profileCard">
                <div id = "block1">
                    <img src={profileImage} alt="image not available" />
                    <div id = "block2">
                        <p style={{fontWeight : "bold", color : "black"}}>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Display;