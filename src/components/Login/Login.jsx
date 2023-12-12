/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import google from"../Assets/Google__G__Logo.png"
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';


const Login = ({ onClose }) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    let navigate = useNavigate()
    const {token, setAuthToken, setAuthUser} = useAuth()
    const [disabled, setDisabled] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleSignup = () => {
      setShowSignup(!showSignup);
    };

    const handleClose1 = () => {
        setShowSignup(false);
    };

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    const handleDisable = () => {
        setDisabled(true);
    };

    const handleSubmit = async () => {
        console.log(JSON.stringify(formData))
        let mydata = {
            "firstName" : "hello",
            "lastName" : "hu",
            "password" : "ueitlkdorkdlgo",
            "email" : "joe@gmail.com",
            "phoneNumber" : "2389482937"
        }

        fetch('http://localhost:5000/api/auth/login', {
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
        // try {
        //     const response = await fetch('http://localhost:5000/api/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // 'Access-Control-Allow-Origin': '*'
        //         },
        //         body: JSON.stringify(formData),
        //         // body : mydata,
        //         //mode: 'no-cors'
        //     });

        //      if (response.ok) {
        //         console.log("auth successful", response)
        //         setAuthToken(response.token)
        //         localStorage.setItem('token',response.token)
        //         navigate('/login')
        //     } else {
        //         console.error("Registration failed");
        //     }
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };

    return (
        <div className={`login-container ${disabled ? "disabled" : ""}`}>
            {!showSignup &&  (
                <div className="login-form">
                    <div className="exit" onClick={() => { 
                        if (onClose) {
                            onClose(); 
                            handleDisable(); 
                        }
                    }}>
                        <i class="bi bi-file-excel"></i>
                    </div>
                    <div className="text"> Login </div>
                    <div className="underline"></div>
                    <div className="welcome"> Welcome to Rentr! </div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className="forgot-password">
                            {" "}
                            <span>
                                <u>Forgot Password?</u>
                            </span>
                        </div>
                    </div>
                    <button className="submit" onClick={handleSubmit}>
                        <Link to="/login">Log In</Link>
                    </button>
                    <div className="or">
                        <span>OR</span>
                    </div>
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
                    <div className="signUp">
                        {" "}
                        <span>
                            Don't have an Account yet? <u onClick={toggleSignup}>Sign Up</u>
                        </span>
                    </div>
                </div>
            )}
            {showSignup && (
        <div className="signup-popup">
          <Signup onClose={() => setShowSignup(false)} />
        </div>
      )}
        </div>
    );
};

export default Login;
