/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import './Signup.css';
import Login from "../Login/Login";
import google from"../Assets/Google__G__Logo.png"
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';

const Signup = ({ onClose, onLoginClick }) => {
    const [disabled, setDisabled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const navigate = useNavigate();
    const {token,setAuthToken, authUser, setAuthUser} = useAuth();

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
        fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                         // 'Access-Control-Allow-Origin': '*'
                     },
                     body: JSON.stringify(formData),
                     // body : mydata,
                    //mode: 'no-cors'
                }).then((response) => response.json())
                .then((data) => {
                    if(data.success){
                        setAuthToken(data.token)
                        localStorage.setItem('token',data.token)
                        // navigate('/login')
                        fetch('http://localhost:5000/api/user/getUser',{
                            method : 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'authorization' : 'Bearer ' + data.token
                            }
                        }).then((response) => response.json())
                        .then((data) => {
                            if(data.success){
                                console.log("user data",data, JSON.stringify(data.data))
                                
                                let stingyUser = JSON.stringify(data)
                                console.log("JSOJ parse", data.data.userId)
                                setAuthUser(JSON.stringify(data.data))
                                localStorage.setItem('user',JSON.stringify(data.data))
                                console.log("user details created")
                                navigate('/login')
                            }
                        })
                    }else{
                        console.log("Auth Failed")
                    }
                })
        
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
