import React from "react";
import "./auth.css";
function Register(){

    return(
        <div className="contaner">
            <div className="box">
                <div className="logo">
                    <h2>Register</h2>
                </div>
                <div className="form">
                <form>
                    <label className="label">Username:</label>
                    <input type="text" name="username" placeholder="Enter your username" className="input_block"/>
                    <label className="label">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" className="input_block"/>
                    <label className="label">Create Password:</label>
                    <input type="password" name="password1" placeholder="Enter your password" className="input_block"/>
                    <label className="label">Conform Password:</label>
                    <input type="password" name="password2" placeholder="Enter your password" className="input_block"/>
                    <button className="btn">Register</button>
                </form>
                <h5>You've already an account?<a href="/">Login</a></h5>
                </div>
            </div>
        </div>
    );
}

export default Register;