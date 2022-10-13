/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './signup.css'
import { useState } from 'react';

function Signup() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <div className="signup-container">
                <div className="signup-title">
                    <h1>Signup</h1>
                </div>
                <form className="signup-form">
                    <div className="names">
                        <input type="text" className="fName" name="firstname" placeholder="First Name" required />
                        <input type="text" name="lastname" placeholder="Last Name" required />
                    </div>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type={passwordShown ? "text" : "password"} name="password" placeholder="Password" required />
                    <input type={passwordShown ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" required />
                    <div>
                        <input type="checkbox" onClick={togglePassword} /> Show Password
                    </div>
                    <button type="submit" name="signup">Sign up</button>
                    <div>
                        <a className="forget" href="#">Already a member?</a>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup