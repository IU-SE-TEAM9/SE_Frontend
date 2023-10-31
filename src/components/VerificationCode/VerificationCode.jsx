import React, { useState, useRef, useEffect } from "react";
import './VerificationCode.css'

import x from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/x.svg'
import plane from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/paperPlane.svg'

const VerificationCode= () => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [focusedIndex, setFocusedIndex] = useState(0);

    useEffect(() => {
        if (inputRefs.current[focusedIndex]){
            inputRefs.current[focusedIndex].focus();
        }
    }, [focusedIndex]);

    const handleInputChange = (index, value) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        if(value.length == 1 && index < verificationCode.length - 1) {
            setFocusedIndex(index + 1)
        }
        setVerificationCode(updatedCode);
    };

    return (
        <div className = "container">
            <div className = "header">
                <div className="exit">
                    <img src={x} />
                </div>
                <div className = "text"> Verification </div>
                <div className="underline"></div>
            </div>
            <div className="description"> A verification code has been sent to your email! </div>
            <div className="plane"> <img src={plane} /> </div>
            <div className="code-inputs">
        {verificationCode.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="code-input"
            ref={(input) => (inputRefs.current[index] = input)}
          />
        ))}
        </div>
        <div className="resendCode"> <u> Resend Code </u></div>
            <button className="submit"> LOGIN </button>
        </div>
    )
} 

export default VerificationCode