/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './login.css'
import { useState } from 'react';

function Login() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-title">
                    <h1>Login</h1>
                </div>
                <form className="login-form">
                    <input type="text" name="user-email" placeholder="Username or Email" />
                    <input type={passwordShown ? "text" : "password"} name="password" placeholder="Password" /> <br />
                    <div>
                        <input type="checkbox" onClick={togglePassword} /> Show Password
                    </div>
                    <button type="submit" name="login">Log in</button>
                    <div>
                        <a className="forget" href="#">Forget Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
