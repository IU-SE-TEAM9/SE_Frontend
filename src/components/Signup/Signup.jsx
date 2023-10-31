import React, { useState } from "react";
import './Signup.css';
import Login from "../Login/Login";
import google from"../Assets/Google__G__Logo.png"

const Signup = ({ onClose, onLoginClick }) => {
    const [disabled, setDisabled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDisable = () => {
        setDisabled(true);
    };
    const handleClose = () => {
        if (onClose) {
            handleDisable();
            onClose();
        }
        };

    const toggleLogin = () => {
        if (onLoginClick) {
            onLoginClick();
        }
        setShowLogin(true);
    };

    const handleSubmit = async () => {
        console.log(JSON.stringify(formData))
        try {
            const response = await fetch('https://rentr.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData),
                // body : mydata,
                //mode: 'no-cors'
            });

            if (response.ok) {
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={`container ${disabled ? "disabled" : ""}`}>
            {!disabled && !showLogin && (
                <div>
                    <div className="header">
                        <div></div>
                        
                        <div className="text"> Sign Up </div>
                        <div className="exit1" onClick={handleClose}>
                        <i class="bi bi-file-excel"></i>
                        </div>
                        
                    </div>
                    <div className="underline"></div>
                    <div className="welcome"> Welcome to Rentr! </div>
                    <div className="inputs">
                        <div className="input">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                name="firstName" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="email" 
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="tel" 
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input">
                            <input 
                                type="password" 
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="submit" onClick={handleSubmit}> NEXT </button>
                    <div className="or"><span>OR</span></div>
                    <div className="services">
                        <button className="facebook">
                        <i class="bi bi-facebook"></i>
                            <div className="facebookText">
                           Continue with Facebook
                            <div></div>
                            </div>
                        </button>
                        <button className="google j1s">
                            <img src={google} alt="" className="img1"/>
                            <div className="googleText">
                                Continue with Google
                            </div>
                        </button>
                        <button className="apple">
                        <i class="bi bi-apple"></i>
                            <div className="appleText">
                                Continue with Apple
                            </div>
                        </button>
                    </div>
                    <div className="login" onClick={toggleLogin}>
                        <span> Already have an Account? <u>Login</u></span>
                    </div>
                </div>
            )}
             {showLogin && (
                <div className="login-popup">
                    <Login onClose={() => {
                        if (onClose) {
                            handleDisable();
                            setShowLogin(false);
                        }
                    }} />
                </div>
            )}
        </div>
    )
}

export default Signup;
